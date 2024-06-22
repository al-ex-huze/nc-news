import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import UsersSidebar from "./Users-Sidebar";
import UsersList from "./Users-List";

const Users = () => {
    const [users, setUsers] = useState([]);

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
