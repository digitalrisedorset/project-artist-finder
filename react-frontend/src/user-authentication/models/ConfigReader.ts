import {config} from "./../../config";

export class ConfigReader {
    getSpecialityOptions = () => {
        return config.speciality
            .map((speciality, key) => {
                return {
                    value: speciality,
                    label: speciality
                }
            })
    }
}