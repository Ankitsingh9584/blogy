import { Box, Button, Image, SimpleGrid, Stack ,Text} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {getBlogs} from "../redux/blog/blog.action";
import {SingleBlog} from "./singleBlog"
import { useEffect } from "react";

export function AllBlogs(){
    const dispatch=useDispatch();
   let blogs= useSelector((store)=>{
        console.log(store);
        return store.blog.getBlogs.allBlogs;
    })
    useEffect(()=>{
        dispatch(getBlogs())
    },[])
const navigate=useNavigate();

const gotoSingleblog=(image,date,blog,category,id)=>{


navigate(`/singleblog/:${id}`)
}


return(
<>
<Box w={"full"}>
<Image  width={"100%"} height={"400px"} src="https://www.doz.com/wp-content/uploads/2013/08/blog.jpg"/>
</Box>
<SimpleGrid margin={"auto"}  w={"80%"} columns={{base:1,md:2,lg:3}}>
    {blogs?.map((el)=>{
        return(
            <>
            <Box margin={"auto"} marginTop={"20px"} marginLeft={{base:"auto",md:"20px"}}>
                <Image src={el.image} w={"320px"} h={"160px"}/>
               
                <Text >{el.blogCategory}</Text>
                <Button marginTop={3} onClick={()=>gotoSingleblog(el.image,el.date,el.blog,el.blogCategory,el._id)} colorScheme='blue'>Read Blog</Button>
            </Box>
            </>
        )
    })}
</SimpleGrid>
</>


)


}