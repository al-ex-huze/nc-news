import UsersSidebar from "./Users-Sidebar";
import UsersAddNewUser from "./Users-Add-New-User";

const UsersRegister = () => {
    return (
        <>
            <div className="Sidebar">
                <UsersSidebar />
            </div>
            <div className="Content">
                <UsersAddNewUser />
            </div>
        </>
    );
};

export default UsersRegister;
