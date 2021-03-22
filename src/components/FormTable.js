import React from "react";
function FormTable({detailsList,setPerson, person,addDetails,edit,setEdit,setDetailsList,arrIndex,setArrIndex, id, setId}) {
    
    const handleEdit=(detId)=>{
    
     setEdit(true)
    const tempObj = detailsList.filter((value) =>  (detId === value.id))[0]
    setId(detId)
    setPerson(tempObj) 

    
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
                {detailsList.map((detail) => (
                    <tr>
                        <td>{detail.id}</td>
                        <td>{detail.name}</td>
                        <td>{detail.fatherName}</td>
                        <td>{detail.age}</td>
                        <td>{detail.address}</td>
                        <td><button onClick={()=>handleEdit(detail.id)}>Edit</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div></>
 )  
}
export default FormTable