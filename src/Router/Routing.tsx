import { Route, Routes } from "react-router-dom"
import AppLayout from "../layout/AppLayout"
import Home from "../Pages/Home"
import Registration from "../Pages/Regestration"
import Categories from "../Pages/Categories"
import DetailsCourse from "../Pages/DetailsCourse"
import Dashboard from "../Pages/Dashboard"
import DashboardLayout from "../Pages/Dashboard/DashboardLayout"
import Actions from "../Pages/Dashboard/Actions"
import Courses from "../Pages/Dashboard/Courses"
import Category from "../Pages/Dashboard/Category"
import Students from "../Pages/Dashboard/Students"
import Setting from "../Pages/Dashboard/Setting"
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/category" element={<Categories/>}/>
            <Route path="/Course-details" element={<DetailsCourse/>}/>
        </Route>  
        <Route path="/dashboard" element={<DashboardLayout/>}>
            <Route path="home" element={<Dashboard/>}/>
            <Route path="courses" element={<Courses/>}/>
            <Route path="category" element={<Category/>}/>
            <Route path="student" element={<Students/>}/>
            <Route path="actions" element={<Actions/>}/>
            <Route path="setting" element={<Setting/>}/>
        </Route>   
        <Route path="/login" element={<Registration/>}/> 
      </Routes>
    </>
  )
}
export default Routing