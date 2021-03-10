import React, { useState, useContext, useEffect } from "react";
import "../Style/Profile.css";
import { AppContext } from "../Context/ContextProvider";
import { useHistory } from "react-router-dom";

const Profile = () => {
  let history = useHistory();
  const { products, currentWorker, setProducts } = useContext(
    AppContext
  );
  const firstName = currentWorker.fullName.substr(
    0,
    currentWorker.fullName.indexOf(" ")
  );
  const productFilterd = products.filter((product) => {
    return product.inPlace === false;
  });

 
  useEffect(() => {}, [products]);
  return (
    <div className="profile-container">
      <h3 className="h3">welcome {firstName}</h3>

      <p className="p">Details: </p>
      <p className="p">Full Name: {currentWorker.fullName}</p>
      <p className="p">NO. : {currentWorker.empNUM}</p>
      <p className="p">
        Forklift truck license: {currentWorker.forkLift ==="true" ? "yes" : "no"}
      </p>
      <h3 className="h3">List of products</h3>
      {productFilterd.map((product, i) => {
        return (
          <div className="productList">
            <p>NO. : {product.prodNum}</p>
            <p>Name: {product.prodName}</p>
            <p>Need forklift truck: {product.forkLift ? "yes" : "no"}</p>
            <div className="update">
              <button
                className="update-btn"
                onClick={(i) => {
                  let temp, temp2;
                  if (!product.forkLift) {
                    temp = product;
                    temp.inPlace = true;
                    productFilterd[i] = temp;
                    temp2 = productFilterd;
                      setProducts(temp2);
                      currentWorker.numOfProdInPlace++;
                  } else if (
                    currentWorker.forkLift === "true" &&
                    product.forkLift
                  ) {
                    temp = product;
                    temp.inPlace = true;
                    productFilterd[i] = temp;
                    temp2 = productFilterd;
                    setProducts(temp2);
                      
                      currentWorker.numOfProdInPlace++;
                  } else {
                    alert("A forklift license is required");
                  }
                }}
              >
                Update
              </button>
            </div>
          </div>
        );
      })}
      <div className="logOut">
        <button className="logOut-btn" onClick={() => history.push("/")}>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Profile;
