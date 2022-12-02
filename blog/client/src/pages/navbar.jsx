import { Box, Button, HStack, Link,Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export function Navbar(){
    const navigate=useNavigate();
    const isAuth=false;
    return(
        <>
        <HStack  w={"full"} >
            <Box w={"50%"}>
            <Button fontSize={"23px"} border={"0px"} _hover={{bgColor:"white",color:"blue"}}  bgColor={"white"}  onClick={ ()=>navigate("/")}>Blogs</Button>
            </Box>
           
           <HStack w={"45%"} justifyContent={"end"}>
           <Box >
          
          { isAuth? <Button  colorScheme='blue'>Logout</Button>:<Button  colorScheme='blue'
          onClick={ ()=>navigate("/login")}
          >Login</Button>}
     
         </Box>
         <Box>
       
       { isAuth? "":<Button  onClick={ ()=>navigate("/signup")}  colorScheme='blue'>Register</Button>}
  
      </Box>
           </HStack>
        </HStack>
        
        
        </>
    )
}