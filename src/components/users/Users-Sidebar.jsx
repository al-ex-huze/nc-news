import { Link } from "react-router-dom";

const UsersSidebar = () => {
    return (
        <div className="Sidebar__users-sub-nav">
            <ul>
                <li>
                    <Link to="/users/">
                        <button className="Sidebar__button">
                            All Users
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/users/register">
                        <button className="Sidebar__button">
                            Register
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default UsersSidebar;
