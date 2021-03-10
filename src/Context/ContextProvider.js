import React, { createContext, useState } from "react";
export const AppContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [workers, setWorkers] = useState([
    {
      empNUM: "99999",
      fullName: "admin",
      numOfProdInPlace: 0,
    },
    {
      empNUM: "12345",
      fullName: "tal ohana",
      forkLift: "false",
      visitors: 15,
      numOfProdInPlace: 0,
    },
    {
      empNUM: "54321",
      fullName: "niko deal",
      forkLift: "true",
      visitors: 30,
      numOfProdInPlace: 0,
    },
    {
      empNUM: "55555",
      fullName: "pablo escobar",
      forkLift: "true",
      visitors: 30,
      numOfProdInPlace: 0,
    },
    {
      empNUM: "22222",
      fullName: "alex novikov",
      forkLift: "false",
      visitors: 30,
      numOfProdInPlace: 0,
    },
  ]);
  const [products, setProducts] = useState([
    {
      prodNum: "11122",
      prodName: "Green Box",
      forkLift: false,
      inPlace: true,
    },
    {
      prodNum: "22554",
      prodName: "Green Box",
      forkLift: true,
      inPlace: false,
    },
    {
      prodNum: "66698",
      prodName: "Blue Box",
      forkLift: true,
      inPlace: true,
    },
    {
      prodNum: "78544",
      prodName: "Red Box",
      forkLift: false,
      inPlace: false,
    },
    {
      prodNum: "69875",
      prodName: "Red Box",
      forkLift: false,
      inPlace: true,
    },
    {
      prodNum: "22126",
      prodName: "Gray Box",
      forkLift: true,
      inPlace: false,
    },
    {
      prodNum: "13425",
      prodName: "Purple Box",
      forkLift: true,
      inPlace: false,
    },
  ]);
  const [currentWorker, setCurrentWorker] = useState(null);
  const addCurrentWorker = (worker) => {
    ///current user object
    setCurrentWorker(worker);
  };
  const addWorkerToList = (worker) => {
    /// any signup user object
    let temp = [...workers, worker];
    setWorkers(temp);
    };
  
  return (
    <AppContext.Provider
      value={{
        workers,
        products,
        addWorkerToList,
        addCurrentWorker,
        currentWorker,
        setProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
