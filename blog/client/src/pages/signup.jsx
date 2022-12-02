import {Box, VStack,Text, Input,  FormControl, FormLabel,FormHelperText, Button,} from "@chakra-ui/react"
export  function SignUp(){

    return(
<>
<VStack  w={"400px"} margin={'auto'} marginTop={"60px"}>
<FormControl>
    <Text fontSize={"35px"}>SIGNUP</Text>
    <FormLabel>Full Name</FormLabel>
  <Input type='text' placeholder="Enter Your Full Name"/>
  <FormLabel marginTop={5}>Email address</FormLabel>
  <Input type='email' placeholder="Enter Your email Here"/>
  <FormLabel marginTop={5}>Password</FormLabel>
  <Input type='password' placeholder="Enter Your password Here"/>
  <Button my={5} colorScheme='blue'>SignUp</Button>
</FormControl>
</VStack>


</>


    )

}