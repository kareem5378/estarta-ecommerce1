//Imports
import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//Reducer imports
import Products from "../reducers/Products/reducer";
import Auth from "../reducers/Auth/reducer";
import HandleCart from "../reducers/Cart/reducer";

const persistConfig = {
  key: "root",
  storage,
};

const allReducers = combineReducers({
  Products,
  Auth,
  HandleCart,
});
const persistedReducer = persistReducer(persistConfig, allReducers);
const store = createStore(persistedReducer, {}, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };
