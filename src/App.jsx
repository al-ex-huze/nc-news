import { useContext, useState } from "react";
import { UserContext } from "./contexts/User-Context";


import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";

import Home from "./components/Home";
import Articles from "./components/articles/Articles";
import ArticlesSingle from "./components/articles/Articles-Single";
import Users from "./components/users/Users";
import UsersSingle from "./components/users/Users-Single";

import UsersRegister from "./components/users/Users-Register";

import RouteError from "./components/Route-Error";

import "../src/styles/App.css";
import "../src/styles/Header.css";
import "../src/styles/Nav.css";
import "../src/styles/Sidebar.css";
import "../src/styles/Content.css";

function App() {
    const { userLoggedIn, setUserLoggedIn } = useContext(UserContext);
    const [showSortBy, setShowSortBy] = useState(false);

    return (
        <div className="App">
            <Header />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/articles/"
                    element={
                        <Articles
                            showSortBy={showSortBy}
                            setShowSortBy={setShowSortBy}
                        />
                    }
                />
                <Route
                    path="/articles/:article_id"
                    element={<ArticlesSingle setShowSortBy={setShowSortBy} />}
                />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:username" element={<UsersSingle />} />
                    <Route path="/users/register" element={<UsersRegister />} />
                <Route path="*" element={<RouteError />} />
            </Routes>
        </div>
    );
}

export default App;
