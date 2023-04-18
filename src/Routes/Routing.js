import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Students from '../Pages/Students'
import ContactUs from '../Pages/ContactUs'
import AddNewStudents from '../Pages/AddNewStudents'
import EditDetails from '../Pages/EditDetails'
import Error from '../Pages/Error'

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Students' element={<Students/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
      <Route path='/AddnewStudent' element={<AddNewStudents/>}/>
      <Route path='/EditDetails' element={<EditDetails/>}/>
      <Route path="/*" element={<Error/>}/>
    </Routes>
  )
  }

export default Routing