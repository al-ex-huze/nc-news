import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/User-Context";

const UsersSidebar = () => {
    const { userLoggedIn, setUserLoggedIn } = useContext(UserContext);

    return (
        <div className="Sidebar__users-sub-nav">
            <ul>
                <li>
                    <Link to={`/users/${userLoggedIn.username}`}>
                        <button className="Sidebar__button">Account</button>
                    </Link>
                </li>
                <li>
                    <Link to="/users/">
                        <button className="Sidebar__button">All Users</button>
                    </Link>
                </li>
                <li>
                    <Link to="/users/register">
                        <button className="Sidebar__button">Register</button>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default UsersSidebar;
