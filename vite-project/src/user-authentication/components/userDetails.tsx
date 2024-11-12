import {useUser} from '../hooks/useUser';
import {Form} from "../../global/styles/Form";
import {ConfigReader} from "../models/ConfigReader";

export const UserDetails: React.FC = () => {
    const user = useUser();
    const configReader = new ConfigReader()

    return (
        <Form>
            <h2>Your details</h2>
            <fieldset>
                <label htmlFor="name">
                    Your Name
                    <input
                        type="text"
                        name="name"
                        value={user?.name}
                        disabled
                    />
                </label>
                <label htmlFor="email">
                    Your Email
                    <input
                        type="text"
                        name="name"
                        value={user?.email}
                        disabled
                    />
                </label>
                <label htmlFor="type">
                    Select your speciality
                    <select className="form-select">
                        <option value="">-</option>
                        {configReader.getSpecialityOptions().map((item) => {
                            return (<option key={item.value} value={item.value}>{item.label}</option>)
                        })}
                    </select>
                </label>
            </fieldset>
        </Form>
    )
}