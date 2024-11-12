import {Dispatch} from "redux";
import {FlassMessaggeActionList} from "../../../state/actions";
import {FlashMessageActionType} from "../../../state/action-types";

export const addFlashMessage = (message: string) => {
    return async (dispatch: Dispatch<FlassMessaggeActionList>) => {
        dispatch({
            type: FlashMessageActionType.ADD_FLASH_MESSAGE,
            message
        })
    }
}