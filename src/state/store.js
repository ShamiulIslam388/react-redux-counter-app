import { createStore } from "redux";
import reducerCount from "./reducer";

const store = createStore(reducerCount);

export default store;
