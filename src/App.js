import React, { useState } from "react";
import Form from "./components/Form"
import FormTable from "./components/FormTable"
//import "./App.css"

//import './App.css';
function App(){
      const [detailsList, setDetailsList] = useState([])
      const [person, setPerson] = useState({id: 0, name: "", fatherName: "", age:0, address:""})
      const [edit, setEdit] = useState(false)
      const [arrIndex, setArrIndex] = useState(0)
      const [id, setId] = useState();

      
      const addDetails = (id, name, fatherName, age, address) => {
      const detailsObject ={id: id, name: name, fatherName: fatherName, age: age, address:address};
      setDetailsList ([...detailsList, detailsObject])}
      
  
  return(
    <div>
        
        <Form addDetails={addDetails} person={person} setPerson={setPerson} edit={edit} setEdit={setEdit} detailsList={detailsList} setDetailsList={setDetailsList} arrIndex={arrIndex} setArrIndex={setArrIndex} id={id} setId={setId}/>
        <FormTable person={person}  setPerson={setPerson} detailsList={detailsList} addDetails={addDetails} edit={edit} setEdit={setEdit} setDetailsList={setDetailsList} arrIndex={arrIndex} setArrIndex={setArrIndex} id={id} setId={setId}/>
      
    </div>
  )

}
export default App