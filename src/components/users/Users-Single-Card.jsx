import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUserByUsername } from "../../api";

import ErrorComponent from "../Error-Component";

const UsersSingleCard = () => {
    const [isLoading, setIsLoading] = useState(true);

    const { username } = useParams();

    const [singleUser, setSingleUser] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        getUserByUsername(username).then((user) => {
            setSingleUser(user);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error)
        })
    }, [username]);
    
    if (isLoading) return <p>Loading User</p>;
    return (
        <div className="Content__single-card">
            <div className="Content__single-card-micro-container">
                <h3>{singleUser.username}</h3>
            </div>
            <div className="Content__single-card-micro-container">
                <p>{singleUser.name}</p>
            </div>
            <img src={singleUser.avatar_url} alt="User Avatar Image" />
            </div>

    )
}

export default UsersSingleCard;