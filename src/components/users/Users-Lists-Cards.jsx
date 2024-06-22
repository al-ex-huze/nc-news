const UsersListCards = ({ user }) => {
    return (
        <button className="Content__list-card">
            <div className="Content__list-card-micro-container">
                <h3>{user.username}</h3>
            </div>
            <div className="Content__list-card-micro-container">
                <div className="Content__list-card-username">{user.name}</div>
            </div>
            <div className="Content__list-card-micro-container">
                    <img src={user.avatar_url} alt="User Avatar" />
            </div>
        </button>
    );
};

export default UsersListCards;
