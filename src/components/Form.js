import React, {useState} from "react";
function Form({addDetails,person, setPerson}){
    const handleClick = (e) => {
        e.preventDefault();
        addDetails(person.name, person.fatherName, person.age, person.address);
        setPerson({name: "", fatherName: "", age: 0, address: ""})

    }

    
    return(
        <div>
            <form>

            <label>Please Enter Your Name: </label>
            <input type="text" 
            placeholder="First Name" 
            value={person.name} 
            onChange={(e) => setPerson({...person, name:e.target.value})}/>
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
            <button onClick={handleClick}> Submit</button>

              </form>
        </div>
        
    )


}
export default Form