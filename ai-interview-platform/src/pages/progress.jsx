import "./progress.css";

function Progress() {

  const dsaSolved =

    localStorage.getItem("dsaSolved") || 0;

  const mockTaken =

    localStorage.getItem("mockTaken") || 0;

  const streak =

    localStorage.getItem("streak") || 0;

  const score =

    localStorage.getItem("score") || 0;


  return (

    <div className="progress">

      <h1>My Progress</h1>

      <div className="card">

        <h2>DSA Questions Solved</h2>

        <p>{dsaSolved}</p>

      </div>



      <div className="card">

        <h2>Mock Interviews Taken</h2>

        <p>{mockTaken}</p>

      </div>



      <div className="card">

        <h2>Current Streak</h2>

        <p>{streak} Days</p>

      </div>



      <div className="card">

        <h2>Average Score</h2>

        <p>{score} / 10</p>

      </div>

    </div>

  );

}

export default Progress;