//Imports
import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

//Reducer imports
import Products from "../reducers/Products/reducer";
import Auth from "../reducers/Auth/reducer";
import HandleCart from "../reducers/Cart/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartReducer"], // Add any reducer you want to persist in the local storage
};

const store = createStore(
  persistedReducer,
  allReducers,
  {},
  applyMiddleware(thunk)
);

const persistor = persistStore(store);

const persistedReducer = persistReducer(persistConfig, AllReducers);

const allReducers = combineReducers({
  Products,
  Auth,
  HandleCart,
});

export { store, persistor };
