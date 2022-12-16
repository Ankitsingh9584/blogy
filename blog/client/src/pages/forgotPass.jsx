
import {Box, VStack,Text, Input,  FormControl, FormLabel, Button,useToast} from "@chakra-ui/react"
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {sendDetails} from "../redux/forgotpass/forgotpas.action";
import { useNavigate } from "react-router-dom";
export function ForgotPass(){
const dispatch=useDispatch();
const navigate=useNavigate();
const toast=useToast();
    const [userDetails,setUserDetails]=useState({email:""});
const callDispatch=()=>{
    if(userDetails.email===""){
        return toast({
            title: 'All fields are mandatory.',
            description: "Please fill all the details.",
            status: 'warning',
            duration: 1000,
            isClosable: true, 
        })
    }
    dispatch(sendDetails(userDetails))
}
const store=useSelector((store)=>store)
  

if(store.forgotPass.sendEmailOtp.otpGet){
 toast({
        title: 'OTP Verification.',
        description: "Please verify your otp we have sent to your email",
        status: 'success',
        duration: 3200,
        isClosable: true,
    })
    store.forgotPass.sendEmailOtp.otpGet=false;
    return navigate("/forgotpassotp")
}
if(store.forgotPass.sendEmailOtp.error){
    toast({
        title: 'User not registered.',
        description: "Please Signup.",
        status: 'error',
        duration: 1000,
        isClosable: true, 
    })
    store.forgotPass.sendEmailOtp.error=false;
}



    return(
        <>
        <VStack  w={"400px"} margin={'auto'} marginTop={"60px"}>
        <FormControl>
            <Text fontSize={"35px"}>RESET PASSWORD</Text>
          <FormLabel>Email address</FormLabel>
          <Input onChange={(e)=>setUserDetails({email:e.target.value})} type='email' placeholder="Enter Your email Here"/>

        
        </FormControl>
        <Button onClick={callDispatch} colorScheme='blue' color={"black"} _hover={{bgColor:"orange"}} >
       Submit
          </Button>
        </VStack>
        
        
        </>
        
        
            )

}