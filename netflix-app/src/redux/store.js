import movieReducer from "./rootReducer";
import { createStore } from 'redux';
const store = createStore(movieReducer);
export default store;