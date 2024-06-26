import { useState } from "react";

import HomeList from "./Home-List";

const Home = () => {
    const [homeArticles, setHomeArticles] = useState([]);

    return (
        <div className="Content">
            Random Article
            <HomeList
                homeArticles={homeArticles}
                setHomeArticles={setHomeArticles}
            />
        </div>
    );
};

export default Home;
