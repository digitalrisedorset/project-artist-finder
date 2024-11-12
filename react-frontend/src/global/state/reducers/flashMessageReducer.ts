import {FlassMessaggeActionList} from '../../../state/actions'
import {FlashMessageActionType} from '../../../state/action-types'

interface FlashMessageState {
    messages: string[]
    messageType: string,
}

const initialState = {
    messages: [],
    messageType: ''
}

const reducer = (
    state: FlashMessageState = initialState,
    action: FlassMessaggeActionList
): FlashMessageState => {
    switch (action.type) {
        case FlashMessageActionType.ADD_FLASH_MESSAGE:
            //state.messages.push(action.message)
            return { messages: [action.message], messageType: 'success' }
        default:
            return state;
    }
}

export default reducer