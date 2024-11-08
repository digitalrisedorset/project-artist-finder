import {text, calendarDay, select, relationship, bigInt} from "@keystone-6/core/fields";
import {list} from "@keystone-6/core";
import {isAdmin, isAdminOrSameUser} from "./User";
import {allowAll} from "@keystone-6/core/access";

export const ProjectSubscription = list({
    access: allowAll,
    ui: {
        listView: {
            initialColumns: ['member', 'member_type', 'startDate', 'status'],
        },
    },
    fields: {
        startDate: calendarDay({
            access: {
                // only the respective user, or an admin can read this field
                read: isAdminOrSameUser,
                // only admins can update this field
                update: isAdmin,
            },
            isFilterable: false,
            isOrderable: false
        }),
        endDate: calendarDay({
            access: {
                // only the respective user, or an admin can read this field
                read: isAdminOrSameUser,
                // only admins can update this field
                update: isAdmin,
            },
            isFilterable: false,
            isOrderable: false
        }),
        status: select({
            type: 'enum',
            options: [
                { label: 'Pending', value: 'pending' },
                { label: 'Active', value: 'active' },
                { label: 'Rejected', value: 'rejected' },
                { label: 'Terminated', value: 'terminated' },
            ],
        }),
        member_type: select({
            type: 'enum',
            options: [
                { label: 'Artist', value: 'artist' },
                { label: 'Partner', value: 'partner' },
                { label: 'Volunteer', value: 'volunteer' },
            ],
        }),
        member: relationship({
            ref: 'User.ProjectSubscriptions'
        }),
    },
});