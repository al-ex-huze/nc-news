import UsersSidebar from "./Users-Sidebar";
import UsersSingleCard from "./Users-Single-Card";

const UsersSingle = () => {
    return (
        <>
            <div className="Sidebar">
                <UsersSidebar />
            </div>
            <div className="Content">
                <UsersSingleCard />
            </div>
        </>
    );
};

export default UsersSingle;
