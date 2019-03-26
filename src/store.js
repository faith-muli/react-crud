
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";
import promise from "redux-promise-middleware";

const middleware =
    composeWithDevTools(applyMiddleware(promise ,thunk))


export default createStore(rootReducer, middleware);