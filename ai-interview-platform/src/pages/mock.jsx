import { useState } from "react";
import groq from "../groq";
import "./mock.css";

function Mock() {

  const [role, setRole] = useState("Frontend Developer");

  const [question, setQuestion] = useState("");

  const [answer, setAnswer] = useState("");

  const [feedback, setFeedback] = useState("");



  async function startInterview() {

    try {

      const chatCompletion =
        await groq.chat.completions.create({

          messages: [

            {

              role: "user",

              content:

              `Ask one interview question for ${role}.

              Only give the question.`

            }

          ],

          model: "llama-3.3-70b-versatile"

        });



      setQuestion(

        chatCompletion

        .choices[0]

        .message

        .content

      );



      setAnswer("");

      setFeedback("");

    }

    catch (error) {

      console.log(error);

      alert("Error generating question");

    }

  }



  async function checkAnswer() {

    try {

      const chatCompletion =
        await groq.chat.completions.create({

          messages: [

            {

              role: "user",

              content:

              `

Interview Question:

${question}



Candidate Answer:

${answer}



Give feedback.

Mention:

1. Strengths

2. Improvements

3. Score out of 10

Use plain text.

`

            }

          ],

          model: "llama-3.3-70b-versatile"

        });



      setFeedback(

        chatCompletion

        .choices[0]

        .message

        .content

      );



      let count =

      Number(

        localStorage.getItem(

          "mockTaken"

        )

      ) || 0;



      count++;



      localStorage.setItem(

        "mockTaken",

        count

      );



    }

    catch (error) {

      console.log(error);

      alert("Error checking answer");

    }

  }



  return (

    <div className="mock">

      <h1>

        Mock Interview

      </h1>



      <h3>

        Select Role

      </h3>



      <select

        value={role}

        onChange={(e) =>

          setRole(e.target.value)

        }

      >

        <option>

          Frontend Developer

        </option>

        <option>

          Backend Developer

        </option>

        <option>

          Full Stack Developer

        </option>

        <option>

          AI Engineer

        </option>

      </select>



      <button

        onClick={startInterview}

      >

        Start Interview

      </button>



      <h2>

        Question

      </h2>



      <p>

        {question}

      </p>



      <h2>

        Your Answer

      </h2>



      <textarea

        rows="6"

        value={answer}

        onChange={(e) =>

          setAnswer(

            e.target.value

          )

        }

        placeholder="Type your answer here"

      >

      </textarea>



      <button

        onClick={checkAnswer}

      >

        Submit Answer

      </button>



      <h2>

        AI Feedback

      </h2>



      <pre>

        {feedback}

      </pre>

    </div>

  );

}

export default Mock;