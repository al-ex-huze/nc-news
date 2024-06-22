import { useContext, useEffect, useState } from "react";
import { TiCancel, TiTrash } from "react-icons/ti";
import { UserContext } from "../../contexts/User-Context";
import { useParams } from "react-router-dom";

import { getUserByUsername, deleteUserByUsername } from "../../api";

import ErrorComponent from "../Error-Component";

const UsersSingleCard = () => {
    const { userLoggedIn, setUserLoggedIn } = useContext(UserContext);
    const { username } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [singleUserError, setSingleUserError] = useState(null);
    const [deleteUserError, setDeleteUserError] = useState(null);
    const [singleUser, setSingleUser] = useState([]);

    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const toggleDeleteConfirm = () => {
        setShowDeleteConfirm(!showDeleteConfirm);
    };

    useEffect(() => {
        setIsLoading(true);
        getUserByUsername(username)
            .then((user) => {
                setSingleUser(user);
                setIsLoading(false);
            })
            .catch((error) => {
                setSingleUserError(error);
            });
    }, [username]);

    const handleDeleteUser = () => {
        setIsDeleting(true);
        deleteUserByUsername(singleUser.username)
            .then((confirmation) => {
                if (confirmation) {
                    setIsDeleting(false);
                    setIsDeleted(true);
                }
            })
            .catch((error) => {
                setIsDeleting(false);
                setDeleteUserError(
                    " Delete Unsuccessful - Something Went Wrong"
                );
            });
    };

    const handleLoginUser = () => {
        setUserLoggedIn({
            username: singleUser.username,
            avatar_url: singleUser.avatar_url,
            votedOnArticle: [],
        });
    };

    if (singleUserError) return <ErrorComponent error={singleUserError} />;
    if (isDeleting)
        return <div className="Content__single-card">Please Wait</div>;
    if (isDeleted)
        return <div className="Content__single-card">User Deleted</div>;
    if (isLoading) return <p>Loading User</p>;
    return (
        <>
            <div className="Content__single-card">
                <div className="Content__single-card-micro-container">
                    <h3>{singleUser.username}</h3>
                </div>
                <div className="Content__single-card-micro-container">
                    <p>{singleUser.name}</p>
                </div>
                <img src={singleUser.avatar_url} alt="User Avatar Image" />
                <div className="Content__login-button-container">
                    {userLoggedIn.username !== singleUser.username ? (
                        <button
                            className="Content__login-button"
                            onClick={handleLoginUser}
                        >
                            Login
                        </button>
                    ) : null}
                </div>

                <div className="Content__delete-button-container">
                    {userLoggedIn.username === singleUser.username ? (
                        <button
                            className="Content__delete-button"
                            onClick={toggleDeleteConfirm}
                        >
                            Delete User
                        </button>
                    ) : null}
                    {showDeleteConfirm && (
                        <button
                            className="Content__delete-confirm-button"
                            onClick={handleDeleteUser}
                        >
                            Confirm Delete
                        </button>
                    )}
                    {deleteUserError ? (
                        <p>
                            <TiCancel /> {deleteUserError} <TiCancel />
                        </p>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default UsersSingleCard;
