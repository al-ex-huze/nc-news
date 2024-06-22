import { useState } from "react";

import HomeList from "./Home-List";

const Home = () => {
    
const [homeArticles, setHomeArticles] = useState([]);


    return <div className="Content">Home
    <HomeList />
    </div>;
};

export default Home;
