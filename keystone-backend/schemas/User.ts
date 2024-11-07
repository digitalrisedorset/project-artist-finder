import {list} from "@keystone-6/core";
import {allowAll, denyAll} from "@keystone-6/core/access";
import {password, text, checkbox, select} from "@keystone-6/core/fields";

export const User = list({
    access: allowAll,
    ui: {
        listView: {
            initialColumns: ['name', 'email', 'role'],
        },
    },
    fields: {
        name: text({
            access: {
                // only the respective user, or an admin can read this field
                read: allowAll,

                // only admins can update this field
                update: allowAll,
            },
            isFilterable: false,
            isOrderable: false
        }),
        email: text({
            access: {
                // only the respective user, or an admin can read this field
                read: allowAll,

                // only admins can update this field
                update: allowAll,
            },
            isFilterable: false,
            isOrderable: false,
            isIndexed: 'unique',
            validation: {
                isRequired: true,
            },
        }),
        // the user's password, used as the secret field for authentication
        //   should not be publicly visible
        password: password({
            access: {
                read: denyAll, // TODO: is this required?
                update: allowAll,
            },
            validation: {
                isRequired: true,
            },
            ui: {
                itemView: {
                    // don't show this field if it isn't relevant
                    fieldMode: 'hidden',
                },
                listView: {
                    fieldMode: 'hidden', // TODO: is this required?
                },
            },
        }),
        type: select({
            type: 'enum',
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'Manager', value: 'manager' },
                { label: 'Staff', value: 'staff' },
            ],
        }),
        // a flag to indicate if this user is an admin
        //  should not be publicly visible
        isAdmin: checkbox({
            access: {
                // only the respective user, or an admin can read this field
                read: false,

                // only admins can create, or update this field
                create: false,
                update: false,
            },
            defaultValue: false,
            ui: {
                // only admins can edit this field
                createView: {
                    fieldMode: args => 'hidden',
                },
                itemView: {
                    fieldMode: args => 'read',
                },
            },
        })
    }
})