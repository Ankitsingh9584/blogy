import { Box, Button, HStack, Link,Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {logOut} from "../redux/login/login.action"
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
export function Navbar(){
    const navigate=useNavigate();
    const dispatch=useDispatch();
 const {isAuth,userName}=useSelector((store)=>store.login);


function logOutDispatch(){
    dispatch(logOut());
     navigate("/user/login")
}
    return(
        <>
        <HStack h={"50px"} bgColor={"blue"} w={"full"} >
            <HStack w={"50%"}>
            <Box paddingLeft={{base:0,md:30,lg:40}}>
            <Text fontSize={{base:"18px",lg:"23px"}} border={"0px"} _hover={{color:"orange"}} color={"white"}   onClick={ ()=>navigate("/")}>Blogs</Text>
            </Box>
            <Box paddingLeft={"25px"}>
            <Text fontSize={{base:"18px",lg:"23px"}} border={"0px"} _hover={{color:"orange"}} color={"white"}     onClick={ ()=>navigate("/createblog")}>Create</Text>
            </Box>
            </HStack>
           <HStack w={"45%"} justifyContent={"end"}>


           <Box>
       
       { isAuth? <Text fontSize={"25px"} color={"orange"}>Hello {userName}</Text>:<Button  onClick={ ()=>navigate("/user/register")} color={"white"} _hover={{color:"orange"}} fontSize={{base:"17px",lg:"23px"}}  bgColor='blue'>
        Register</Button>}
  
      </Box>
           <Box >
          
          { isAuth? <Button color={"white"} _hover={{color:"orange"}} fontSize={{base:"17px",lg:"23px"}}
          onClick={logOutDispatch}
          bgColor='blue'>Logout</Button>
          :<Button color={"white"} _hover={{color:"orange"}} fontSize={{base:"17px",lg:"23px"}}  bgColor='blue'
          onClick={ ()=>navigate("/user/login")}
          >Login</Button>}
     
         </Box>
         
           </HStack>
        </HStack>
        
        
        </>
    )
}