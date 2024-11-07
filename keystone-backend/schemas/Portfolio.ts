import {text, relationship} from "@keystone-6/core/fields";
import {list} from "@keystone-6/core";
import {isAdmin, isAdminOrSameUser} from "./User";
import {allowAll} from "@keystone-6/core/access";

export const Portfolio = list({
    access: allowAll,
    ui: {
        listView: {
            initialColumns: ['name', 'projectsAssigned'],
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
            isFilterable: false,
            isOrderable: false,
            validation: {
                isRequired: true,
            },
        }),
        owner: relationship({
            ref: 'User.activePortfolio'
        }),
        projectsAssigned: relationship({
            ref: 'Project.portfolios',
            many: true,
        }),
    },
});