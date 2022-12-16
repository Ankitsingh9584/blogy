
import {Routes,Route} from "react-router-dom"
import { Login } from "../pages/login";
import { SignUp } from "../pages/signup";
import {AllBlogs} from "../pages/allBlogs";
import {SingleBlog} from "../pages/singleBlog";
import {CreateBlog} from "../pages/createBlog";
import {PrivateRoutes} from "./privateRoutes";
import {ForgotPass} from "../pages/forgotPass";
import {ForgotPassOtp} from "../pages/forgotpassotp"
export function AllRoutes(){

return(
    <>
    <Routes>
        <Route path="user/login" element={<Login/>}/>
        <Route path="user/register" element={<SignUp/>}/>
        <Route path="/" element={<AllBlogs/>}/>
        <Route path="/forgotpass" element={<ForgotPass/>}/>
        <Route path="/forgotpassotp" element={<ForgotPassOtp/>}/>
        <Route path="/singleblog/:id" element={<PrivateRoutes><SingleBlog/></PrivateRoutes>}/>
        <Route path="/createblog" element={<PrivateRoutes><CreateBlog/></PrivateRoutes>}/>
    </Routes>
    
    </>
)

}