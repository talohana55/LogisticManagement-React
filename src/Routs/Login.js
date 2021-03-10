import React, { useState, useContext } from "react";
import "../Style/Login.css";
import { AppContext } from "../Context/ContextProvider";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { addCurrentWorker, workers } = useContext(AppContext);
  const [error, setError] = useState(false);
  let history = useHistory();
  const [getID, setGetID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = false;
    let userObj = {};
    for (let i = 0; i < workers.length; i++) {
      if (getID === workers[i].empNUM) {
        flag = true;
        userObj = workers[i];
        setError(false);
        break;
      }
    }
    if (flag) {
        addCurrentWorker(userObj);
        if (getID === '99999') {
            history.push('/manager')
        } else {
            history.push('/profile')
        }
    } else {
      setError(true);
    }
  };

  return (
    <form className="signin-container" onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>
      <div className="inputs1">
        <span className="span">NO.</span>
        <input
          type="number"
          value={getID}
          onChange={(e) => {
            setGetID(e.target.value);
            setError(false);
          }}
        />
      </div>
      {error && <p>The Worker X dosn't exist.</p>}
      <div className="enter">
        <input type="submit" value="Enter" className="enter-btn" />
      </div>
    </form>
  );
};

export default Login;
