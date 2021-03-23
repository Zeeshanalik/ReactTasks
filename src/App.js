import React, { useState } from "react";
import Form from "./components/Form"
import FormTable from "./components/FormTable"

const App = () => {
      const [detailsList, setDetailsList] = useState([])
      const [personDetails, setPersonDetails] = useState({id: 0, name: "", fatherName: "", age:0, address:""})
      const [isEditButtonClicked, setEditButton] = useState(false)
      const [personId, setPersonId] = useState();

      
      const addDetails = (id, name, fatherName, age, address) => {
      const detailsObject ={id: id, name: name, fatherName: fatherName, age: age, address:address};
      setDetailsList ([...detailsList, detailsObject])}

      const propsObject = {
        addDetails,
        personDetails,
        setPersonDetails,
        isEditButtonClicked,
        setEditButton,
        detailsList,
        setDetailsList,
        personId,
        setPersonId

      }
      
  
  return(
    <div>
        
        <Form propsObject={propsObject}/>
        <FormTable propsObject={propsObject}/>
      
    </div>
  )

}
export default App