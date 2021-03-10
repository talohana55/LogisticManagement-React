import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../Context/ContextProvider";
import "../Style/SignUp.css";

const SignUp = () => {
  const { addWorkerToList, workers } = useContext(AppContext);
  const [error, setError] = useState(false);
  let history = useHistory();
  const [signupForm, setSignupForm] = useState({
    empNUM: "",
    fullName: "",
    forkLift: "false",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
    setError(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = true;
    if (setSignupForm.empNUM) {
      if (signupForm.empNUM.length !== 5) {
        flag = false;
        setError(true);
      } else {
        for (let i = 0; i < workers.length; i++) {
          if (signupForm.empNUM === workers[i].empNUM) {
            setError(true);
            flag = false;
            break;
          }
        }
      }
    }
    if (signupForm.fullName.length < 4) {
      flag = false;
      setError(true);
    }
    if (!signupForm.forkLift) {
      flag = false;
      setError(true);
    }
    if (flag) {
      addWorkerToList(signupForm); ///insert worker to list 
      setError(false);
      history.push('/login')
    } else {
      setError(true);
    }
  };

  return (
    <form className="signup-container" onSubmit={handleSubmit} noValidate>
      <h2>Sign Up</h2>
      <div className="inputs">
        <span className="span">NO.</span>
        <input
          type="number"
          name="empNUM"
          value={signupForm.empNUM}
          className="signup"
          onChange={handleChange}
        />
      </div>
      <div className="inputs">
        <span className="span">FullName</span>
        <input
          type="text"
          name="fullName"
          value={signupForm.fullName}
          className="signup"
          onChange={handleChange}
        />
      </div>
      {error && <p>Please provid valid information.</p>}
      <h3 className="forklift-header">Forklift Truck</h3>
      <div className="radioDiv">
        <div className="input-radio">
          <input
            type="radio"
            name="forkLift"
            value={true}
            onChange={handleChange}
          />
          <span className="radioSpan">yes</span>
        </div>
        <div className="input-radio">
          <input
            type="radio"
            name="forkLift"
            value={false}
            onChange={handleChange}
            defaultChecked
          />
          <span className="radioSpan">no</span>
        </div>
      </div>
      <div className="create">
        <input type="submit" value="Create" className="create-btn" />
      </div>
    </form>
  );
};

export default SignUp;
