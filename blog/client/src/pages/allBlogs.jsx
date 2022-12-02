import { Box, Button, Image, SimpleGrid, Stack ,Text} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
let blogs=[
{
    blogImg:"https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg",
blogName:"Cricket",
blogDesc:"a world is going to adventure the fun of cricket"

},
{
    blogImg:"https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg",
blogName:"Cricket",
blogDesc:"a world is going to adventure the fun of cricket"

},
{
    blogImg:"https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg",
blogName:"Cricket",
blogDesc:"a world is going to adventure the fun of cricket"

},
{
    blogImg:"https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg",
blogName:"Cricket",
blogDesc:"a world is going to adventure the fun of cricket"

},
{
    blogImg:"https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg",
blogName:"Cricket",
blogDesc:"a world is going to adventure the fun of cricket"

},



]
export function AllBlogs(){
const navigate=useNavigate();
return(
<>
<Box w={"full"}>
<Image  width={"100%"} height={"400px"} src="https://www.doz.com/wp-content/uploads/2013/08/blog.jpg"/>
</Box>
<SimpleGrid margin={"auto"}  w={"80%"} columns={{base:1,md:2,lg:3}}>
    {blogs.map((el)=>{
        return(
            <>
            <Box margin={"auto"} marginTop={"20px"} marginLeft={{base:"10px",md:"20px"}}>
                <Image src={el.blogImg}/>
                <Text fontSize={"x-large"}>{el.blogName}</Text>
                <Text >{el.blogDesc}</Text>
                <Button marginTop={3} onClick={()=>navigate("/singleblog")} colorScheme='blue'>Read Blog</Button>
            </Box>
            </>
        )
    })}
</SimpleGrid>
</>


)


}