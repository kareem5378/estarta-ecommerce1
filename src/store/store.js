//Imports
import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

//Reducer imports
import Auth from "../reducers/Auth/reducer";
import Products from "../reducers/Products/reducer";

const allReducers = combineReducers({
  Products,
  Auth,
});

const store = createStore(allReducers, {}, applyMiddleware(thunk));
export default store;
