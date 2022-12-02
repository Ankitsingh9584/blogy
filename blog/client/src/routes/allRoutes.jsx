
import {Routes,Route} from "react-router-dom"
import { Login } from "../pages/login";
import { SignUp } from "../pages/signup";
import {AllBlogs} from "../pages/allBlogs";
import {SingleBlog} from "../pages/singleBlog"
export function AllRoutes(){

return(
    <>
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/" element={<AllBlogs/>}/>
        <Route path="/singleblog" element={<SingleBlog/>}/>
    </Routes>
    
    </>
)

}