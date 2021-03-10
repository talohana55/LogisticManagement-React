import React, {  useContext } from "react";
import "../Style/Manager.css";
import { AppContext } from "../Context/ContextProvider";
import { useHistory } from "react-router-dom";

const Manager = () => {
     let history = useHistory();
     const { workers } = useContext(AppContext);


    return (
      <div className="manager-container">
        <h2 className="h2">Manager</h2>
        <form>
          <table style={{ width: "100%" }}>
            <tr>
              <th>NO.</th>
              <th>FullName</th>
              <th>Counter</th>
              <th>Products In Place</th>
            </tr>
                    {workers.map((worker, i) => {
                if(workers[i].empNUM !== '99999')
              return (
                <tr>
                  <td className='empNum'>{workers[i].empNUM}</td>
                  <td>{workers[i].fullName}</td>
                  <td>{workers[i].numOfProdInPlace }</td>
                  <td>{workers[i].numOfProdInPlace}</td>
                </tr>
              );
            })}
          </table>
        </form>
        <div className="logout-div">
          <button className="logout-btn" onClick={() => history.push("/")}>
            Log Out
          </button>
        </div>
      </div>
    );
}

export default Manager
