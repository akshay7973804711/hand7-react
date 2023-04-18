import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { studentAdded } from '../Features/StudentSlice';
import { useDispatch,useSelector } from 'react-redux';

const AddNewStudents = () => {
    const data=useSelector((state)=>state.student);
    const [Name,setName]=useState("");
    const [Age,setAge]=useState("");
    const [Course,setCourse]=useState("");
    const [Batch,setBatch]=useState("");
    const navigate=useNavigate();
    const dispatch=useDispatch();


    const cancelAddStudent=()=>{
        navigate("/Students");
        
    }

     const SubmitNewStudent=()=>{
        if(Name && Age && Course && Batch){
            dispatch(studentAdded({
             "id":data.length,
                "Name":Name,
                "Age":Age,
                "Course":Course,
                "Batch":Batch
            }))     
        }
        navigate("/Students")
    }
  return (
    <>
    <div className="flex1">
        <fieldset>
           <legend>Name </legend>
           <input type="text" name="Name"  placeholder='Name' value={Name} onChange={(e) => setName(e.target.value)} />
        </fieldset>

        <fieldset>
           <legend>Age </legend>
           <input type="text" name="Age"  placeholder='Age' value={Age} onChange={(e) => setAge(e.target.value)} />       
        </fieldset>
        
        <fieldset>
           <legend>Course </legend>
           <input type="text" name="Course "  placeholder='Course ' value={Course } onChange={(e) => setCourse (e.target.value)} />
        </fieldset>
        <fieldset>
           <legend>Batch </legend>
           <input type="text" name="Batch"  placeholder='Batch' value={Batch} onChange={(e) => setBatch(e.target.value)} />
        </fieldset>
    </div>

    <div className='flex2'>
         <div> <button className='btn1' onClick={cancelAddStudent}>Cancel</button></div>
         <div> <button className='btn1' onClick={SubmitNewStudent}>Submit</button></div>
    </div>

    </>
  )
}

export default AddNewStudents