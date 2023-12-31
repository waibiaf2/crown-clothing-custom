import {compose, createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import {rootReducer} from "./root-reducer";

const middleWares = [process.env.NOV_ENV === "development" && logger].filter(
	Boolean
);

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnhancers);
