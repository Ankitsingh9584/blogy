
import { Image,Box,Text, Textarea, Button, HStack, VStack ,useToast} from "@chakra-ui/react"
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {postComment} from "../redux/comments/comment.action";
 import {getBlogs} from "../redux/blog/blog.action";
import {getComment} from "../redux/comments/comment.action";
import {deleteComment} from "../redux/comments/comment.action"
export function SingleBlog(){
  const [comment,setComment]=useState("");
  const dispatch=useDispatch();

  const data=useSelector((store)=>store.blog.getBlogs.allBlogs);
let comment_data=useSelector((store)=>store.comment.getComments.comments);
console.log("comment_data",comment_data)
  const toast=useToast();
  
  const params=useParams();
let id=params.id.split(":");
 //console.log(id)


console.log(data)
let oneBlog=data.filter((el)=>el._id===id[1].toString());
 //console.log(oneBlog);
const {userName,userId}=useSelector((store)=>store.login)
function callDispatch(){
  if(comment===""){
    return toast({
      title: 'All fields are mandatory.',
      description: "Please Fill all the fields",
      status: 'error',
      duration:3200,
      isClosable: true, 
    })
  }
  let date=new Date()
  dispatch(postComment(comment,id[1],userName,userId,date))
}
useEffect(()=>{
  dispatch(getComment())
dispatch(getBlogs())
},[])

// 
function deleteComment1(id){

dispatch(deleteComment(id))
}
const get_comment=useSelector((store)=>store);
console.log(get_comment)
if(get_comment.comment.postComments.success){
  toast({
    title: 'Comment posted Successfully.',
    description: "Try to read more blogs and post comments.",
    status: 'success',
    duration: 3200,
    isClosable: true,
  })
  get_comment.comment.postComments.success=false;
}

    return(
        <>
        <VStack w={"full"} >
    <Image marginTop={5} w={"full"} h={"400px"} src={oneBlog[0]?.image}/>
        
        <Box  marginTop={7} w={"80%"} margin={"auto"} justifyContent={"top"}  >
            <Text fontWeight={"bold"} fontSize={"5xl"}>{oneBlog[0]?.blogCategory}</Text>
          <Box marginTop={7}>
            <HStack justifyContent={"space-between"}>
               <Text color={"gray.600"}>Author:{oneBlog[0]?.author}</Text>
               <Text color={"gray.600"}> Date:{oneBlog[0]?.date.split("T")[0]}</Text>
            </HStack>
            <Text marginTop={3} mb='8px'>{oneBlog[0]?.blog}</Text>
          </Box>

            <HStack marginTop={"80px"}>
      <Textarea h={"160px"}
       onChange={(e)=>setComment(e.target.value)}
   
        placeholder="what's on your mind"
       
      />
      <Button onClick={callDispatch}  colorScheme='blue'>Post</Button>
      </HStack>
        </Box>
        </VStack>

        {/* comments */}
<Text fontSize={"4xl"}>Comments</Text>
<VStack w={"80%"} margin={"auto"} justifyContent={"space-between"}>
{
       
       comment_data &&comment_data?.map((el)=>{
        if(el.blogId===id[1]){
    return(
      <>
 
        <VStack  borderRadius={"19px"}  w={"80%"} bgColor={"gray.200"}>
<HStack w={"96%"} justifyContent={"space-between"}>
  <Box>
<Text marginLeft={"20px"} >Name:{el.userName}</Text>
</Box>
<Box>
  Date:{el.date.split('T')[0]}
</Box>

</HStack>

  <HStack w={"97%"}  justifyContent={"space-between"}>
  <Box marginLeft={"20px"} >Comment:{el.comment}</Box>
  <Box >
{el.userId===userId ? <Button onClick={()=>deleteComment1(el._id)} marginBottom={"10px"} marginRight={"10px"} colorScheme={"blue"}>Delete
</Button>:""}</Box>
  </HStack>

       
       
        </VStack>
     
      </>
    )
    }
  })


}
</VStack>

        </>
    )
}

