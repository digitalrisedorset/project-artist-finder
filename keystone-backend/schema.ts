import type { Lists } from '.keystone/types'
import {User} from "./schemas/User";
import {Location} from "./schemas/Location"
import {Project} from "./schemas/Project"
import {Portfolio} from "./schemas/Portfolio";

export type Session = {
    itemId: string
    data: {
        isAdmin: boolean
    }
}

export const lists = {
    User,
    Location,
    Project,
    Portfolio
} satisfies Lists
