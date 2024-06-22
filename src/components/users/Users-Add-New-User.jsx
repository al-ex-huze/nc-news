import { useState } from "react";
import { postNewUser } from "../../api";
import { useNavigate } from "react-router-dom";

const UsersAddNewUser = () => {
    const [usernameInput, setUsernameInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [avatarUrlInput, setAvatarUrlInput] = useState("");

    const [isRegistering, setIsRegistering] = useState(false);
    const [registerError, setRegisterError] = useState(null);


    const navigate = useNavigate();

    const handleAddNewUserSubmit = (event) => {
        event.preventDefault();
        setIsRegistering(true);
        const newUser = {
            username: usernameInput,
            name: nameInput,
            avatar_url: avatarUrlInput,
        };
        postNewUser(newUser).then((response) => {
            setUsernameInput("");
            setNameInput("");
            setAvatarUrlInput("");
            setIsRegistering(false);
            navigate(`/users/${response.username}`);
        })
        .catch((error) => {
            setRegisterError(" Registration Was Unsuccessful - Something Went Wrong ");
        })
    }
    
    if (isRegistering) return <p>Please Wait</p>;
    return (
        <div className="Content__new-user-form-container">
            <form onSubmit={handleAddNewUserSubmit}>
                <h2>Register New User</h2>
                <ul>
                    <li>
                        <label>
                            <input
                                className="Content__username-input"
                                required
                                placeholder="Username *"
                                value={usernameInput}
                                onChange={(event) => {
                                    setUsernameInput(event.target.value);
                                }}
                            />
                        </label>
                        <label>
                            <input
                                className="Content__name-input"
                                required
                                placeholder="Name *"
                                value={nameInput}
                                onChange={(event) => {
                                    setNameInput(event.target.value);
                                }}
                            />
                        </label>
                        <label>
                            <input
                                className="Content__avatar-url-input"                                
                                placeholder="Avatar URL"
                                value={avatarUrlInput}
                                onChange={(event) => {
                                    setAvatarUrlInput(event.target.value);
                                }}
                            />
                        </label>
                    </li>
                </ul>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default UsersAddNewUser;
