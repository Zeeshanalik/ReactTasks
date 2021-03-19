import React, { useState } from "react";
import Form from "./components/Form"
import FormTable from "./components/FormTable"

//import './App.css';
function App(){
      const [detailsList, setDetailsList] = useState([])
      const [person, setPerson] = useState({name: "", fatherName: "", age:0, address:""})

      
      const addDetails = (name, fatherName, age, address) => {
      const detailsObject ={name: name, fatherName: fatherName, age: age, address:address};
      setDetailsList ([...detailsList, detailsObject])}
      
  
  return(
    <div>
        
        <Form addDetails={addDetails} person={person} setPerson={setPerson}/>
        <FormTable person={person}  setPerson={setPerson} detailsList={detailsList} />
      
    </div>
  )

}
export default App