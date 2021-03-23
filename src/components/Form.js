import React from "react";
const Form = ({propsObject}) => {
    const {detailsList,setPersonDetails, personDetails,addDetails,isEditButtonClicked,setEditButton,setDetailsList, personId} = propsObject 
    const handleClick = (e) => {
        e.preventDefault();
        
        if(personDetails.name==="" || personDetails.fatherName === "" || personDetails.address ==="" || personDetails.age===0) {
            alert("Error! Please enter your details again correctly!")     
           }
            
           else addDetails(personDetails.id, personDetails.name, personDetails.fatherName, personDetails.age, personDetails.address);

           if (isEditButtonClicked){
            let newArr = [...detailsList];
            console.log(personId)
            const updatedArray = newArr.map(value => {
                if (value.id === personId){
                    return {
                        id: personId,
                        name: personDetails.name,
                        fatherName: personDetails.fatherName,
                        age: personDetails.age,
                        address: personDetails.address
                        
                    }
                } else return value;
            })
            setDetailsList(updatedArray);
            setEditButton(false)
    }
    setPersonDetails({id:0 , name: "", fatherName: "", age: 0, address: ""})

    }
    
    return(
        <div>
            <form className="login-form">
            <label>Please Enter Your Id </label>
            <input type="number" 
            placeholder="Id" 
            value={personDetails.id} 
            onChange={(e) => setPersonDetails({...personDetails, id:e.target.value})}
            />
            <hr/>

            <label>Please Enter Your Name: </label>
            <input type="text" 
            placeholder="First Name" 
            value={personDetails.name} 
            onChange={(e) => setPersonDetails({...personDetails, name:e.target.value})}
            
            />
            <hr/>

            <label>Please Enter Your Father Name: </label>
            <input type="text" 
            placeholder="Father Name" 
            value={personDetails.fatherName} 
            onChange={(e) => setPersonDetails({...personDetails, fatherName:e.target.value})}/>
            <hr/>

            <label>Please Enter Your Age: </label>
            <input type="Number" 
            placeholder="Age" 
            value={personDetails.age} 
            onChange={(e) => setPersonDetails({...personDetails, age:e.target.value})}/>
            <hr/>

            <label>Please Enter Your Address: </label>
            <input type="text" 
            placeholder="Address" 
            value={personDetails.address} 
            onChange={(e) => setPersonDetails({...personDetails, address:e.target.value})}/>
            <br/>
            <button className="btn" onClick={handleClick}> Submit</button>

              </form>
        </div>
        
    )



}
export default Form