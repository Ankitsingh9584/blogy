import { Box, Button, HStack, Image, Select, SimpleGrid, Stack ,Text, VStack} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {getBlogs} from "../redux/blog/blog.action";
import {SingleBlog} from "./singleBlog"
import { useEffect } from "react";
import { useState } from "react";

export function AllBlogs(){
    const [data,setData]=useState([]);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getBlogs());
        
    },[]);
   let blogs= useSelector((store)=>{
        console.log(store);
        
        return store.blog.getBlogs.allBlogs;
    });
  

    
     useEffect(()=>{
   
        setData(blogs);

     },[blogs]);
     
const navigate=useNavigate();

const gotoSingleblog=(image,date,blog,category,id)=>{


navigate(`/singleblog/:${id}`)
}
function callFilter(value){
    console.log(value);
    if(value==="all"){
        return setData(blogs)
    }
    else if(value==="music"){
        let data1=blogs.filter((el)=>el.blogCategory.toLowerCase()===value);
        console.log(data1)
        return setData(data1)
    }
    else if(value==="cricket"){
        let data1=blogs.filter((el)=>el.blogCategory.toLowerCase()===value);
        console.log(data1)
        return setData(data1)
    }
    else if(value==="movie"){
        let data1=blogs.filter((el)=>el.blogCategory.toLowerCase()===value);
        console.log(data1)
        return setData(data1)
    }
}

return(
<>
<Box w={"full"}>
<Image  width={"100%"} height={"400px"} src="https://www.doz.com/wp-content/uploads/2013/08/blog.jpg"/>
</Box>
<HStack align={"start"}>

<Box  marginLeft={"2%"}
 height={"200px"} marginTop={"15px"}  paddingLeft={'5px'} paddingRight={"5px"}>
<Text align={"start"} fontSize={"25px"} color={"#0000FF"} fontWeight={"bold"}>Filter By Category</Text>
<Select  fontWeight={"bold"} onChange={(e)=>callFilter(e.target.value)}  placeholder='Select option' my={"2vh"}>
  <option value='all'>All</option>
  <option value='music'>Music</option>
  <option value='movie'>Movie</option>
  <option value='cricket'>Cricket</option>
</Select>
</Box>

<SimpleGrid margin={"auto"}  w={"80%"} columns={{base:1,md:2,lg:3}}>
    {data?.map((el)=>{
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
</HStack>

</>


)


}