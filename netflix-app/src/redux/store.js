import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import rootReducer from "./rootReducer";  // Import your combined reducers

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;