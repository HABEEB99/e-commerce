import { applyMiddleware, createStore } from "redux";
import rootReducers from "./root.reducers";

import logger from "redux-logger";

const middlewares = [logger];

const store = createStore(rootReducers, applyMiddleware(...middlewares));

export default store;