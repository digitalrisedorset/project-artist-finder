import {FlashMessageActionType} from "../action-types/flashMessageAction";

interface AddFlashMessageAction {
    type: FlashMessageActionType.ADD_FLASH_MESSAGE,
    message: string
}

export type FlassMessaggeActionList = AddFlashMessageAction