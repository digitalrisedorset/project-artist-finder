import type { Lists } from '.keystone/types'
import {User} from "./schemas/User";

export type Session = {
    itemId: string
    data: {
        isAdmin: boolean
    }
}

export const lists = {
    User
} satisfies Lists
