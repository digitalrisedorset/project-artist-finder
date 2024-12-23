import {text, calendarDay, select, relationship, bigInt} from "@keystone-6/core/fields";
import {list} from "@keystone-6/core";
import {isAdmin, isAdminOrSameUser} from "./User";
import {allowAll} from "@keystone-6/core/access";

export const Project = list({
    access: allowAll,
    ui: {
        listView: {
            initialColumns: ['name', 'startDate', 'endDate', 'speciality'],
        },
    },
    fields: {
        name: text({
            access: {
                // only the respective user, or an admin can read this field
                read: isAdminOrSameUser,

                // only admins can update this field
                update: isAdmin,
            },
            isFilterable: true,
            isOrderable: false,
            validation: {
                isRequired: true,
            },
        }),
        description:  text({
            access: {
                // only the respective user, or an admin can read this field
                read: isAdminOrSameUser,

                // only admins can update this field
                update: isAdmin,
            },
            isFilterable: false,
            isOrderable: false,
        }),
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
        latitude: bigInt({
            access: {
                // only the respective user, or an admin can read this field
                read: isAdminOrSameUser,

                // only admins can update this field
                update: isAdmin,
            },
            isFilterable: false,
            isOrderable: false
        }),
        longitude: bigInt({
            access: {
                // only the respective user, or an admin can read this field
                read: isAdminOrSameUser,

                // only admins can update this field
                update: isAdmin,
            },
            isFilterable: false,
            isOrderable: false
        }),
        speciality: select({
            type: 'enum',
            options: [
                { label: 'Painter', value: 'painter' },
                { label: 'Sculptor', value: 'sculptor' },
                { label: 'Wood Maker', value: 'wood_worker' },
            ],
        }),
        owner: relationship({
            ref: 'User.projectsOwner',
        }),
        members: relationship({
            ref: 'User.projectsAssigned',
            many: true,
        }),
        portfolios: relationship({
            ref: 'Portfolio.projectsAssigned',
            many: true,
        }),
        mediasAssigned: relationship({
            ref: 'MediaAsset.project',
            many: true,
        }),
    },
});
