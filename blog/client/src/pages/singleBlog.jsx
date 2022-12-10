
import { Image,Box,Text, Textarea, Button, HStack, VStack } from "@chakra-ui/react"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
export function SingleBlog(){
  const params=useParams();
let id=params.id.split(":");
// console.log(id)
const data=useSelector((store)=>store.blog.getBlogs.allBlogs);
console.log(data)
let oneBlog=data.filter((el)=>el._id===id[1].toString());
 console.log(oneBlog)
    return(
        <>
        <VStack w={"full"} >
    <Image marginTop={5} w={"full"} h={"400px"} src={oneBlog[0].image}/>
        
        <Box  marginTop={7} w={"80%"} margin={"auto"} justifyContent={"top"}  >
            <Text fontWeight={"bold"} fontSize={"5xl"}>{oneBlog[0].blogCategory}</Text>
          <Box marginTop={7}>
            <HStack justifyContent={"space-between"}>
               <Text color={"gray.600"}>Author:{oneBlog[0].author}</Text>
               <Text color={"gray.600"}> {oneBlog[0].date}</Text>
            </HStack>
            <Text marginTop={3} mb='8px'>{oneBlog[0].blog}</Text>
          </Box>
            <HStack marginTop={"80px"}>
      <Textarea h={"160px"}
       
   
        placeholder="what's on your mind"
       
      />
      <Button  colorScheme='blue'>Post</Button>
      </HStack>
        </Box>
        </VStack>
        </>
    )
}

