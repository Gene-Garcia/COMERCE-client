/*
 * COMERCE will now migrate to using third party state management library
 * instead of using incorrectly and abusing react context.
 *
 * Using react context api, we have created a deeply nested <App /> before
 * actualy reaching the first page-content component. Which would result
 * to deep comparison to be done by react
 *
 * Subsequently, every shown component at the moment, when they
 * all use state data from the context will all get re-rendered whenever
 * the any properties of the state object is changed.
 *
 * However, with REDUX, we can only subscribe to certain properties
 * of a state. Hence, only those that use that certain properties will be
 * re-rendered
 */

// this file will create the global store
import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
