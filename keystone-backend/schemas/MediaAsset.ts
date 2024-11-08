import {text, select, relationship} from "@keystone-6/core/fields";
import {list} from "@keystone-6/core";
import {isAdmin, isAdminOrSameUser} from "./User";
import {allowAll} from "@keystone-6/core/access";

export const MediaAsset = list({
    access: allowAll,
    ui: {
        listView: {
            initialColumns: ['name', 'project', 'asset_type', 'path'],
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
        path: text({
            access: {
                // only the respective user, or an admin can read this field
                read: isAdminOrSameUser,
                // only admins can update this field
                update: isAdmin,
            },
            isFilterable: false,
            isOrderable: false
        }),
        asset_type: select({
            type: 'enum',
            options: [
                { label: 'Image', value: 'image' },
                { label: 'File', value: 'file' },
                { label: 'Video', value: 'video' },
            ],
        }),
        project: relationship({
            ref: 'Project.mediasAssigned',
        }),
    },
});
