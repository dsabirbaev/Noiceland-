
import Intro from "./Intro";
import Cards from "./Cards"
import Posts from "./Posts";
import FeaturedPosts from "./FeaturedPosts";

import "./main.scss";



const index = () => {
    return (
       <main>
            <Intro/>
            <Cards/>
            <Posts/>
            <FeaturedPosts/>
       </main>
    );
};

export default index;