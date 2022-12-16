import {legacy_createStore,combineReducers,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import {loginReducer} from "./login/login.reducer";
import {signupReducer} from "./signup/signup.reducer";
import {blogReducer}  from "../redux/blog/blog.reducer";
import {commentReducer} from "../redux/comments/comment.reducer";
import {forgotPass} from "../redux/forgotpass/forgotpass.reducer"
  const rootReducer=combineReducers({
    login:loginReducer,
    signup:signupReducer,
    blog:blogReducer,
    comment:commentReducer,
    forgotPass:forgotPass
});

const createComposer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

export const store=legacy_createStore(rootReducer,createComposer(applyMiddleware(thunk)));