import { legacy_createStore as createStore } from "redux";
import {devToolsEnhancer} from 'redux-devtools-extension'
import testReducer from "../../features/sandbox/testReducer";

export const configureStore = () => {
    return createStore(testReducer, devToolsEnhancer()  )
}