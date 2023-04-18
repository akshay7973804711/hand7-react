import React from 'react'
import { useSelector } from 'react-redux'
import TableRow from '../Component/TableRow'
import { useNavigate } from 'react-router-dom';


const Students = () => {
    const navigate=useNavigate();
    const data= useSelector((state)=>state.student);
//  console.log("Data is here",data)

const AddNewStudent=()=>{
    navigate('/AddnewStudent')
}


return (
    <>
    <div className='box1'>
      <h3 className='heading'>Student Details</h3>
      <button className='btn1' onClick={AddNewStudent}>Add New Student</button>
    </div>
    <table border='1px' className='table'>
      <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((student)=>{
            return(
              <tr key={student.id}>
                <TableRow student={student}/>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    </>
  )
}

export default Students