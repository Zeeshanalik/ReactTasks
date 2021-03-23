import React from "react";
const FormTable = ({propsObject}) => {
    const {detailsList,setPersonDetails,setEditButton,setPersonId} = propsObject 
    
    const handleEdit=(detId)=>{
    
    setEditButton(true)
    const tempObj = detailsList.filter((value) =>  (detId === value.id))[0]
    setPersonId(detId)
    setPersonDetails(tempObj) 

    
    }
 return (
     <>
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID |</th>
                    <th>Full Name |</th>
                    <th> Father's Name |</th>
                    <th> Age |</th>
                    <th> Address </th>
                </tr>
            </thead>
            <tbody>
                {detailsList.map(({id,name,fatherName,age,address}) => (
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{fatherName}</td>
                        <td>{age}</td>
                        <td>{address}</td>
                        <td><button onClick={()=>handleEdit(id)}>Edit</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div></>
 )  
}
export default FormTable