import { VStack,Text, Input,  FormControl, FormLabel,FormHelperText, Button,useToast} from "@chakra-ui/react";
import { useDispatch,useSelector } from "react-redux";
import { signup } from "../redux/signup/signup.action";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
;

export  function SignUp(){

    const dispatch=useDispatch();
  const navigate=useNavigate();
    const [userDetails,setUserDetails]=useState({name:"",email:"",password:""});
   
    let store=useSelector((store)=>store);
      const toast=useToast();
function callAction(){
    // console.log("hello")
    // console.log(userDetails);
  


if(userDetails.name===""||userDetails.email===""||userDetails.password===""){
  return  toast({
        title: 'All fields are mandatory.',
        description: "Please fill all the details.",
        status: 'warning',
        duration: 1000,
        isClosable: true,
      })
}
else{
    console.log(store)
    dispatch(signup(userDetails));
}

   



}
if(store.signup.register ){
    toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 1000,
        isClosable: true,
      });
    //   important steps to make false
      store.signup.register=false;
    return  navigate('/user/login')
}
if(store.signup.error){
    toast({
        title: 'user already exists.',
        description: "Please try to register with different email or try to login",
        status: 'error',
        duration:1000,
        isClosable: true,
      });
          //   important steps to make false
      store.signup.error=false
} 

    
   

    return(
<>
<VStack  w={"400px"} margin={'auto'} marginTop={"60px"}>
<FormControl>
    <Text fontSize={"35px"}>SIGNUP</Text>
    <FormLabel>Full Name</FormLabel>
  <Input type='text'  onChange={(e)=>setUserDetails({...userDetails,name:e.target.value})} placeholder="Enter Your Full Name"/>
  <FormLabel marginTop={5}>Email address</FormLabel>
  <Input type='email' onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})} placeholder="Enter Your email Here"/>
  <FormLabel marginTop={5}>Password</FormLabel>
  <Input type='password' onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} placeholder="Enter Your password Here"/>
  <Button my={5} colorScheme='blue' onClick={()=>callAction()}>SignUp</Button>
</FormControl>
</VStack>


</>


    )

}