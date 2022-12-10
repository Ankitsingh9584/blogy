import {Box, VStack,Text, Input,  FormControl, FormLabel, Button,useToast} from "@chakra-ui/react"
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import {googleAuth, login} from '../redux/login/login.action';
import { useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";

export  function Login(){
    const toast=useToast()
const dispatch=useDispatch();
const [userDetails,setUserDetails]=useState({email:"",password:""});
const navigate=useNavigate();
let store=useSelector((store)=> store)
function callDispatch(){
   
    dispatch(login(userDetails));
    if(store.login.isAuth){
        toast({
            title: 'Login successfull.',
            description: "User Login Successfull.",
            status: 'success',
            duration: 1000,
            isClosable: true,
        })
        return navigate("/")
     }
     else if(!store.login.isAuth){
     toast({
         title: 'Invalid Credentials.',
                 description: "Please provide right email and password",
                 status: 'error',
                 duration:1000,
                 isClosable: true, 
     })
     
}

}

function googleAuth1(){
    console.log('hello google')
dispatch(googleAuth());
}

    return(
<>
<VStack  w={"400px"} margin={'auto'} marginTop={"60px"}>
<FormControl>
    <Text fontSize={"35px"}>LOGIN</Text>
  <FormLabel>Email address</FormLabel>
  <Input onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})} type='email' placeholder="Enter Your email Here"/>
  <FormLabel marginTop={5}>Password</FormLabel>
  <Input onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} type='password' placeholder="Enter Your password Here"/>
  <Button onClick={callDispatch} my={5} colorScheme='blue'>Login</Button>
</FormControl>
<Button colorScheme='white' color={"black"} _hover={{bgColor:"orange"}} onClick={()=>googleAuth1()}>
<FcGoogle size={"32px"}/>   Login with Google 
  </Button>
</VStack>


</>


    )

}