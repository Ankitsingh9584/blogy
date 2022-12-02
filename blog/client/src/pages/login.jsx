import {Box, VStack,Text, Input,  FormControl, FormLabel,FormHelperText, Button,} from "@chakra-ui/react"

export  function Login(){

    return(
<>
<VStack  w={"400px"} margin={'auto'} marginTop={"60px"}>
<FormControl>
    <Text fontSize={"35px"}>LOGIN</Text>
  <FormLabel>Email address</FormLabel>
  <Input type='email' placeholder="Enter Your email Here"/>
  <FormLabel marginTop={5}>Password</FormLabel>
  <Input type='password' placeholder="Enter Your password Here"/>
  <Button my={5} colorScheme='blue'>Login</Button>
</FormControl>
</VStack>


</>


    )

}