import {Box, VStack,Text, Input,  FormControl, FormLabel, Button,useToast} from "@chakra-ui/react"
import { useState } from "react";
import {setForgotPass} from "../redux/forgotpass/forgotpas.action"
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export function ForgotPassOtp(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const toast=useToast();
    const [userDetails,setUserDetails]=useState({otp:"",password:""});
const store=useSelector((store)=>store)
    function callDispatch(){
        // console.log("setforgotpass",store)
        if(userDetails.otp===""||userDetails.password===""){
            return toast({
                title: 'All fields are mandatory.',
                description: "Please fill all the details.",
                status: 'warning',
                duration: 1000,
                isClosable: true, 
            })
        }
         dispatch(setForgotPass({storeOtp:store.forgotPass.sendEmailOtp.otp,...userDetails,email:store.forgotPass.sendEmailOtp.userEmail}))
    }








    if(store.forgotPass.setUserNewpass.success){
        toast({
               title: 'New Password set successfully.',
               description: "Please try to login with new password",
               status: 'success',
               duration: 3200,
               isClosable: true,
           })
           store.forgotPass.setUserNewpass.success=false;
           return navigate("/user/login")
       }
       if(store.forgotPass.setUserNewpass.error){
           toast({
               title: 'Wrong otp.',
               description: "Please enter correct otp.",
               status: 'error',
               duration: 1000,
               isClosable: true, 
           })
           store.forgotPass.setUserNewpass.error=false;
       }
       


    return(
        <>
       <VStack  w={"400px"} margin={'auto'} marginTop={"60px"}>
<FormControl>
    <Text fontSize={"35px"}>OTP Verification</Text>
  <FormLabel>Enter Your otp</FormLabel>
  <Input onChange={(e)=>setUserDetails({...userDetails,otp:e.target.value})} placeholder="Enter Your otp Here"/>
   <FormLabel>Enter New Password</FormLabel>
  <Input onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}  placeholder="Enter New password Here"/>
  
</FormControl>
<Button  onClick={callDispatch} colorScheme='white' color={"black"} _hover={{bgColor:"orange"}} >
Submit
  </Button>
</VStack>


        </>
    )
}