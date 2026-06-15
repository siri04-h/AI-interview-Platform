import { useState } from "react";
import groq from "../groq";
import "./dsa.css";

function DSA() {

  const [topic, setTopic] = useState("Arrays");

  const [difficulty, setDifficulty] = useState("Easy");

  const [questions, setQuestions] = useState([]);

  const [hint, setHint] = useState("");

  const [solution, setSolution] = useState("");



  async function generateQuestions() {

    try {

      const chatCompletion =

      await groq.chat.completions.create({

        messages: [

          {

            role: "user",

            content:

            `Generate 5 ${difficulty} DSA questions on ${topic}.

            Give only question names with numbering.`

          }

        ],

        model: "llama-3.3-70b-versatile"

      });



      const text =

      chatCompletion

      .choices[0]

      .message

      .content;



      const questionArray =

      text

      .split("\n")

      .filter(q => q.trim() !== "");



      setQuestions(questionArray);

    }

    catch(error){

      console.log(error);

      alert("Error generating questions");

    }

  }



  async function getHint(question) {

    try {

      const chatCompletion =

      await groq.chat.completions.create({

        messages: [

          {

            role: "user",

            content:

            `Give a hint for solving

            ${question}

            Do not give full solution.`

          }

        ],

        model: "llama-3.3-70b-versatile"

      });



      setHint(

        chatCompletion

        .choices[0]

        .message

        .content

      );

    }

    catch(error){

      console.log(error);

    }

  }



  async function explainSolution(question) {

    try {

      const chatCompletion =

      await groq.chat.completions.create({

        messages: [

          {

            role: "user",

            content:

            `Explain solution for

            ${question}

            Include:

            1. Approach

            2. Time Complexity

            3. Space Complexity.`

          }

        ],

        model: "llama-3.3-70b-versatile"

      });



      setSolution(

        chatCompletion

        .choices[0]

        .message

        .content

      );

    }

    catch(error){

      console.log(error);

    }

  }



  function markSolved() {

    let count =

    Number(

      localStorage.getItem(

        "dsaSolved"

      )

    ) || 0;



    count++;



    localStorage.setItem(

      "dsaSolved",

      count

    );



    alert(

      "Question marked as solved"

    );

  }



  return (

    <div className="dsa">

      <h1>DSA Practice</h1>



      <h3>Topic</h3>

      <select

      value={topic}

      onChange={(e)=>

      setTopic(e.target.value)

      }

      >

        <option>Arrays</option>

        <option>Strings</option>

        <option>Linked List</option>

        <option>Trees</option>

        <option>Graphs</option>

      </select>



      <h3>Difficulty</h3>

      <select

      value={difficulty}

      onChange={(e)=>

      setDifficulty(e.target.value)

      }

      >

        <option>Easy</option>

        <option>Medium</option>

        <option>Hard</option>

      </select>



      <button

      onClick={generateQuestions}

      >

        Generate Questions

      </button>



      <div className="questions">

        <h2>Questions</h2>



        {

        questions.map((question,index)=>(

        <div

        className="question-card"

        key={index}

        >

          <p>

            {question}

          </p>



          <button

          onClick={markSolved}

          >

            Mark as Solved

          </button>



          <button

          onClick={()=>

          getHint(question)

          }

          >

            Get AI Hint

          </button>



          <button

          onClick={()=>

          explainSolution(question)

          }

          >

            Explain Solution

          </button>

        </div>

        ))

        }



        <h2>

          AI Hint

        </h2>



        <pre>

          {hint}

        </pre>



        <h2>

          AI Solution

        </h2>



        <pre>

          {solution}

        </pre>

      </div>

    </div>

  );

}

export default DSA;