import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";

import Home from "./components/Home";
import Articles from "./components/Articles";
import ArticlesSingle from "./components/Articles-Single";
import Users from "./components/Users";

import "./App.css";

function App() {
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
            </Routes>
        </div>
    );
}

export default App;
