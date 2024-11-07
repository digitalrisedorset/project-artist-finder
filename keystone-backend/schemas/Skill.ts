import { checkbox } from "@keystone-6/core/fields";

export const skillFields = {
    paint: checkbox({
        defaultValue: false,
        label: 'Paint',
    }),
    sculptor: checkbox({
        defaultValue: false,
        label: 'Sculptor',
    }),
};
