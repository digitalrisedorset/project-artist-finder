import {Link} from "react-router-dom"
import {NavStyles} from '../styles/NavStyles';
import {useUser} from "../../user-authentication/hooks/useUser"
import {SignOut} from "../../user-authentication/components/SignOut";

export const Nav: React.FC = () => {
    const user = useUser();

    return (
        <NavStyles>
            {user && (
                <>
                    <Link to="/account">Account</Link>
                    <Link to="/my-project">My Projects</Link>
                    <SignOut />
            </>)}
            {!user && (
                <>
                    <Link to="/signin">Sign In</Link>
                </>
            )}
        </NavStyles>
    );
}