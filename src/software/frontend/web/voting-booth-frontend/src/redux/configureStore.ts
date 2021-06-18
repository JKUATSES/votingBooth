import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./root.reducer";

const configureStore = (persistedState) => {
  let middlewares = [thunkMiddleware];

  if (process.env.NODE_ENV !== "production") {
    middlewares = [...middlewares];
  }

  const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
};

export default configureStore;
