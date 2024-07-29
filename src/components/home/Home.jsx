import { useState } from "react";

import HomeSidebar from "./Home-Sidebar";
import HomeList from "./Home-List";

const Home = () => {
    const [homeArticles, setHomeArticles] = useState([]);

    return (
        <>
            <div className="Sidebar">
                <HomeSidebar />
            </div>
            <div className="Content">
                <HomeList
                    homeArticles={homeArticles}
                    setHomeArticles={setHomeArticles}
                />
            </div>
        </>
    );
};

export default Home;
