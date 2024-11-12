import {Link} from "react-router-dom"
import {Nav} from './Nav';
import {Logo, HeaderStyles} from '../styles/Header'

export const Header: React.FC = () => {
    return (
        <HeaderStyles>
            <div className="bar">
                <Logo>
                    <Link to="/">Artists Project Hub</Link>
                </Logo>
                <Nav />
            </div>
        </HeaderStyles>
    );
}