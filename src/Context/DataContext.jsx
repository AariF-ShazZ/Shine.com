import React, { useState } from "react";
import axios from 'axios'
export const DataContext = React.createContext();

function DataContextProvider({ children }) {
const [data , setData] = useState([])

const getData = async (q) => {
  if(!q){
   await  axios.get("http://localhost:9090/jobdata")
    .then((r) => setData(r.data))
    .catch((e) => console.log(e))
  }else{
    await axios.get("http://localhost:9090/jobdata" +`?q=${q}`)
    .then((r) => setData(r.data))
    .catch((e) => console.log(e))
  }
}


  return (
    <DataContext.Provider value={{getData , data }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
