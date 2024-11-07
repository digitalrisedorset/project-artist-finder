import { relationship, text, bigInt } from "@keystone-6/core/fields";
import {list} from "@keystone-6/core";
import {isAdmin, isAdminOrSameUser} from "./User";
import {allowAll} from "@keystone-6/core/access";

export const Location = list({
    access: allowAll,
    fields: {
        name: text({
            access: {
                // only the respective user, or an admin can read this field
                read: isAdminOrSameUser,

                // only admins can update this field
                update: isAdmin,
            },
            isFilterable: false,
            isOrderable: false,
            // isIndexed: 'unique',
            validation: {
                isRequired: true,
            },
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
        assignedTo: relationship({
            ref: 'User.locations',
            many: true,
            ui: {
                itemView: { fieldMode: 'read' },
            },
        }),
    },
});
