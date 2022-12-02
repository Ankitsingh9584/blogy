
import { Image,Box,Text, Textarea, Button, HStack, VStack } from "@chakra-ui/react"
export function SingleBlog(){
    return(
        <>
        <VStack w={"full"} >
    <Image marginTop={5} w={"full"} h={"400px"} src="https://media.istockphoto.com/id/1331943301/photo/blog-light-bulb-sign.jpg?b=1&s=170667a&w=0&k=20&c=MFRhBXsnOE7tYSjYx2CLRJgGDzUD5Kxh9c0tH-wP7dk="/>
        
        <Box  marginTop={7} w={"80%"} margin={"auto"} justifyContent={"top"}  >
            <Text fontWeight={"bold"} fontSize={"5xl"}>This is a music blog</Text>
          <Box marginTop={7}>
            <HStack justifyContent={"space-between"}>
               <Text color={"gray.600"}>Author:Ankit Singh</Text>
               <Text color={"gray.600"}> Wed 14 May</Text>
            </HStack>
            <Text marginTop={3} mb='8px'>dhashs bsdhdsavvdff bd fdfhbfhdv f jfggbhjfg bfgbhjfgb ngf bhjjfg jb fgb fg bh fgb
            dkfjfnjnfjbnfgb fg bjgfnbj gf bjg nj g njgnjgjnjgnjgnjbkn nfgnbjgnfb gfn gjjhdsavvdff bd fdfhbfhdv f jfggbhjfg bfgbhjfgb ngf bhjjfg jb fgb fg bh fgb
            dkfjfnjnfjbnfgb fg bjgfnbj gf bjg nj g njgnjgjnjgnjgnjbkn nfgnbjgnfb gfn gjhdsavvdff bd fdfhbfhdv f jfggbhjfg bfgbhjfgb ngf bhjjfg jb fgb fg bh fgb
            dkfjfnjnfjbnfgb fg bjgfnbj gf bjg nj g njgnjgjnjgnjgnjbkn nfgnbjgnfb gfn gj</Text>
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

