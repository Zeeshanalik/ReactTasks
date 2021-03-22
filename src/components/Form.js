import React, {useState} from "react";
function Form({addDetails,person, setPerson,edit,setEdit, detailsList, setDetailsList, arrIndex, setArrIndex,id,setId}){
    const handleClick = (e) => {
        e.preventDefault();
        
        if(person.name==="" || person.fatherName === "" || person.address ==="" || person.age===0) {
            alert("Error! Please enter your details again correctly!")     
           }else if (person.id === detailsList.id){
               alert("Please Enter a unique id")
           }
           else addDetails(person.id, person.name, person.fatherName, person.age, person.address);

           if (edit===true){
            let newArr = [...detailsList];
            console.log("id is:",id);
            const updatedArray = newArr.map(value => {
                if (value.id === id){
                    return {
                        id: id,
                        name: person.name,
                        fatherName: person.fatherName,
                        age: person.age,
                        address: person.address
                        
                    }
                } else return value;
            })
            console.log('Updated Array', updatedArray)
            setDetailsList(updatedArray);
            setEdit(false)
    }
        setPerson({id:0 , name: "", fatherName: "", age: 0, address: ""})

    }
    
    return(
        <div>
            <form className="login-form">
            <label>Please Enter Your Id </label>
            <input type="number" 
            placeholder="Id" 
            value={person.id} 
            onChange={(e) => setPerson({...person, id:e.target.value})}
            />
            <hr/>

            <label>Please Enter Your Name: </label>
            <input type="text" 
            placeholder="First Name" 
            value={person.name} 
            onChange={(e) => setPerson({...person, name:e.target.value})}
            
            />
            <hr/>

            <label>Please Enter Your Father Name: </label>
            <input type="text" 
            placeholder="Father Name" 
            value={person.fatherName} 
            onChange={(e) => setPerson({...person, fatherName:e.target.value})}/>
            <hr/>

            <label>Please Enter Your Age: </label>
            <input type="Number" 
            placeholder="Age" 
            value={person.age} 
            onChange={(e) => setPerson({...person, age:e.target.value})}/>
            <hr/>

            <label>Please Enter Your Address: </label>
            <input type="text" 
            placeholder="Address" 
            value={person.address} 
            onChange={(e) => setPerson({...person, address:e.target.value})}/>
            <br/>
            <button className="btn" onClick={handleClick}> Submit</button>

              </form>
        </div>
        
    )



}export default Form