import React from "react";
function FormTable({detailsList,setPerson, person}) {
    const handleEdit=(key)=>{
        detailsList.filter((v,i) => {if (key===i) {
            detailsList[v] = setPerson({name: ""})
            console.log(i)
            
            
        }})
    }
 return (
     <>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Father's Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {detailsList.map((detail,key) => (
                    <tr>
                        <td>{detail.name}</td>
                        <td>{detail.fatherName}</td>
                        <td>{detail.age}</td>
                        <td>{detail.address}</td>
                        <td><button onClick={()=>handleEdit(key)}>Edit</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div></>
 )
}
export default FormTable