
import {Box,Button,HStack,Image,Input, Textarea, VStack,Text,useToast} from "@chakra-ui/react"
import { useState } from "react"
import {blogPost} from "../redux/blog/blog.action";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const CreateBlog=()=>{
    const navigate=useNavigate();
    const toast=useToast();
   const authorName=useSelector((store)=>store.login.userName);
   const token=useSelector((store)=>store.login.token);
    const [blogDescription,setBlogDescription]=useState({blogCategory:"",blog:"",
    image:"https://www.doz.com/wp-content/uploads/2013/08/blog.jpg",date:new Date(),author:authorName})
const dispatch=useDispatch()
    function sendBlog(){
        if(blogDescription.blogCategory===""||blogDescription.blog===""){
return toast({
    title: 'Invalid Credentials.',
                 description: "All field required",
                 status: 'warning',
                 duration:1000,
                 isClosable: true, 
})
        }

dispatch(blogPost(blogDescription,token));
toast({
    title: 'Blog created successfully.',
                 description: "Now you can see your blog on blog page",
                 status: 'success',
                 duration:1000,
                 isClosable: true, 
})
    }


    return(
        <>

        <Box w={"full"}>
<Image  width={"100%"} height={"400px"} src={blogDescription.image}/>
</Box>
<HStack w={"90%"} justifyContent={"space-between"} margin={"auto"}>
<Input type={"text"} placeholder={"enter Image url You want to Upload for your blog"}
 onChange={(e)=>setBlogDescription({...blogDescription,image:e.target.value})}/>

</HStack>
<VStack w={"90%"} margin={"auto"} marginTop={'25px'} align={"start"}>
<Text fontSize={"3xl"} fontWeight={"bold"}> Type Your blog here...</Text>

</VStack>

<VStack w={"90%"} margin={"auto"} marginTop={2}>
  <Input onChange={(e)=>setBlogDescription({...blogDescription,blogCategory:e.target.value})} placeholder="Enter Blog Type"/> 
 
<Textarea onChange={(e)=>setBlogDescription({...blogDescription,blog:e.target.value})} height={"400px"} placeholder='write here whatever is going on your mind...' />
</VStack>
<VStack w={"90%"} margin={"auto"} marginTop={3}>
<Button onClick={sendBlog} colorScheme={"blue"}>Submit</Button>
</VStack>

        </>
    )
}