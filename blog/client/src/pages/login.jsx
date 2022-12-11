import {Box, VStack,Text, Input,  FormControl, FormLabel, Button,useToast} from "@chakra-ui/react"
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import {googleAuth, login} from '../redux/login/login.action';
import { useNavigate,Navigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";

export  function Login(){
    const toast=useToast()
const dispatch=useDispatch();
const [userDetails,setUserDetails]=useState({email:"",password:""});
const navigate=useNavigate();
let store=useSelector((store)=> store);
console.log(store)
function callDispatch(){
   
    dispatch(login(userDetails));
   
}

// function googleAuth1(){
//     console.log('hello google')
// dispatch(googleAuth());
// }


if(store.login.error){
    toast({
         title: 'Invalid Credentials.',
                 description: "Please provide right email and password",
                 status: 'error',
                 duration:3200,
                 isClosable: true, 
     })
    // this time error is true so page will redirect infinite time hangs system so after 1st login credentials 
    //  wrong error is true error toast displayed then we do store.login.error=false; so re renderning stops.


           //   important steps to make false
     store.login.error=false;
    return <Navigate to="/user/login"/>
    }
if(store.login.isAuth){
    toast({
        title: 'Login successfull.',
        description: "User Loged in Successfully.",
        status: 'success',
        duration: 3200,
        isClosable: true,
    })
    return navigate("/")
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
<Button colorScheme='white' color={"black"} _hover={{bgColor:"orange"}} >
<FcGoogle size={"32px"}/>   Login with Google 
  </Button>
</VStack>


</>


    )
}

