
import { POST_BLOG_SUCCESS,POST_BLOG_ERROR,POST_BLOG_LOADING,
    GET_BLOG_LOADING,GET_BLOG_SUCCESS,GET_BLOG_ERROR} from"./blog.types";

    const initialState={
        getBlogs:{
            allBlogs:[],
            error:false,
            loading:false,
            success:false
        },
        postBlogs:{
            error:false,
            loading:false,
            success:false
        }
    }

    export const blogReducer=(state=initialState,action)=>{
switch (action.type){
case POST_BLOG_SUCCESS:{
    return {
        ...state,
    postBlogs:{ error:false,loading:false,success:true}

    }
}
case POST_BLOG_LOADING :{
    return {
        ...state,
        postBlogs:{error:false,loading:true,success:false}
    }
}
case POST_BLOG_ERROR:{
    return {
        ...state,
        postBlogs:{error:true,loading:false,success:false}
    }
}
case GET_BLOG_SUCCESS:{
    return {
        ...state,
        getBlogs:{allBlogs:action.payload,error:false,success:true
        ,loading:false}
    }
}
case GET_BLOG_LOADING:{
    return {
        ...state,
        getBlogs:{allBlogs:[],error:false,loading:true}
    }
}
case GET_BLOG_ERROR:{
    return{
        ...state,
        getBlogs:{allBlogs:[],error:true,loading:false}
    }
}

default :{
return state

}

}

    }