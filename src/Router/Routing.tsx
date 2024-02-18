import { Route, Routes } from "react-router-dom"
import AppLayout from "../layout/AppLayout"
import Home from "../Pages/Home"
import Registration from "../Pages/Regestration"
import Categories from "../Pages/Categories"
import DetailsCourse from "../Pages/DetailsCourse"
const Routing = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/category" element={<Categories/>}/>
            <Route path="/Course-details" element={<DetailsCourse/>}/>
        </Route>   
        <Route path="/login" element={<Registration/>}/> 
      </Routes>
    </>
  )
}

export default Routing
