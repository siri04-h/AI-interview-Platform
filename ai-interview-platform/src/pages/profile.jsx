import { useState } from "react";
import "./profile.css";

function Profile() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [college, setCollege] = useState("");

  const [branch, setBranch] = useState("");

  const [role, setRole] = useState("Frontend Developer");

  function saveProfile() {

    alert("Profile Saved Successfully");

  }

  return (

    <div className="profile">

      <h1>My Profile</h1>

      <input

        type="text"

        placeholder="Enter Name"

        value={name}

        onChange={(e) =>

          setName(e.target.value)

        }

      />



      <input

        type="email"

        placeholder="Enter Email"

        value={email}

        onChange={(e) =>

          setEmail(e.target.value)

        }

      />



      <input

        type="text"

        placeholder="Enter College"

        value={college}

        onChange={(e) =>

          setCollege(e.target.value)

        }

      />



      <input

        type="text"

        placeholder="Enter Branch"

        value={branch}

        onChange={(e) =>

          setBranch(e.target.value)

        }

      />



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

        onClick={saveProfile}

      >

        Save Profile

      </button>

    </div>

  );

}

export default Profile;