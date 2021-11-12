import { applyMiddleware, createStore } from "redux";
import rootReducers from "./root.reducers";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [logger];

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);

export default {store, persistor};




// 