import { Link } from "react-router-dom";

const UsersListCards = ({ user }) => {
    return (
        <li key={user.username}>
            <Link to={`/users/${user.username}`}>
                <button className="Content__list-card">
                    <div className="Content__list-card-micro-container">
                        <div className="Content__list-card-username">
                            <h2>{user.username}</h2>
                        </div>
                    </div>
                    <div className="Content__list-card-micro-container">
                        <img src={user.avatar_url} alt="User Avatar Image" />
                    </div>
                </button>
            </Link>
        </li>
    );
};

export default UsersListCards;
