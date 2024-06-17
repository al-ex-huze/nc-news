import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <div className="Nav">
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <button className="Nav__button">Home</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/articles">
                            <button className="Nav__button">Articles</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/users">
                            <button className="Nav__button">Users</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;