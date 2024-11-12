import { combineReducers } from "redux";
import flashMessageReducer from "../../global/state/reducers/flashMessageReducer";

const reducers = combineReducers({
    flashMessages: flashMessageReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>