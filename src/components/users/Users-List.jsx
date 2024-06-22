import { useEffect, useState } from "react";

import { getUsers } from "../../api";

import ErrorComponent from "../Error-Component";
import UsersListCards from "./Users-Lists-Cards";

const UsersList = ({ users, setUsers }) => {
    const [userListError, setUserListError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getUsers()
            .then(({ users }) => {
                setUsers(users);
                setIsLoading(false);
            })
            .catch((error) => {
                setUserListError(error);
            });
    }, []);

    if (userListError) return <ErrorComponent error={userListError} />;
    if (isLoading) return <p>Loading Users</p>;
    return (
        <div className="Content">
            <ul>
                {users.map((user) => {
                    return <UsersListCards user={user} key={user.username} />;
                })}
            </ul>
        </div>
    );
};

export default UsersList;
