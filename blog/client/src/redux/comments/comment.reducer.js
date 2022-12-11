import { GET_COMMENT_ERROR,GET_COMMENT_LOADING,GET_COMMENT_SUCCESS,
POST_COMMENT_ERROR,POST_COMMENT_LOADING,POST_COMMENT_SUCCESS,
DELETE_COMMENT_ERROR,DELETE_COMMENT_LOADING,DELETE_COMMENT_SUCCESS
} from "./comment.types";

const initialState={
getComments:{
error:false,
comments:[],
loading:false,
success:false
},
postComments:{
error:false,
loading:false,
success:false
}
}

export const commentReducer=(state=initialState,action)=>{
    switch(action.type){
        case POST_COMMENT_SUCCESS:{
            return{
                ...state,
                postComments:{
                    error:false,
                    loading:false,
                    success:true
                },
                getComments:{
                    comments:action.payload
                }
            }
        }
        case POST_COMMENT_LOADING:{
            return{
                ...state,
                postComments:{
                    error:false,
                    loading:true,
                    success:false
                }
            }
        }
        case POST_COMMENT_ERROR:{
            return{
                ...state,
                postComments:{
                    error:true,
                    loading:false,
                    success:false
                }
            }
        }

// get comments
case GET_COMMENT_SUCCESS:{
    return{
        ...state,
        getComments:{
            error:false,
            loading:false,
            success:true,
            comments:action.payload
        }
    }
}
case GET_COMMENT_LOADING:{
    return{
        ...state,
        getComments:{
            error:false,
            loading:true,
            success:false,
            comments:[]
        }
    }
}
case GET_COMMENT_ERROR:{
    return{
        ...state,
        getComments:{
            error:true,
            loading:false,
            success:false,
            comments:[]
        }
    }
} 
// delete comment
case DELETE_COMMENT_SUCCESS:{
    return{
        ...state,
        getComments:{
            error:false,
            loading:false,
            success:true,
            comments:action.payload
        }
    }
}
case DELETE_COMMENT_LOADING:{
    return{
        ...state,
        getComments:{
            error:false,
            loading:true,
            success:false,
            comments:[]
        }
    }
}
case DELETE_COMMENT_ERROR:{
    return{
        ...state,
        getComments:{
            error:true,
            loading:false,
            success:false,
            comments:[]
        }
    }
} 


        default:{
            return state
        }
    }
}