import movieReducer from "./rootReducer";
import { createStore, applyMiddleware } from 'redux';
const loggerMiddleware = (store) => (next) => (action) => {
    console.log("Dispatching:", action);
    const result = next(action);
    console.log("Next state:", store.getState());
    return result;
};

const store = createStore(movieReducer, applyMiddleware(loggerMiddleware));
export default store;