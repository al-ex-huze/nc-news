import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/User-Context";

import UsersSidebar from "./Users-Sidebar";
import UsersList from "./Users-List";

const Users = () => {
    const { userLoggedIn, setUserLoggedIn } = useContext(UserContext);

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    return (
        <>
            <div className="Sidebar">
                <UsersSidebar />
            </div>
            <div className="Content">
                <UsersList users={users} setUsers={setUsers} />
            </div>
        </>
    );
};

export default Users;
