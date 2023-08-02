import { useState } from "react";

import post1 from "../../assets/images/posts/1.jpg";
import post2 from "../../assets/images/posts/2.jpg";
import post3 from "../../assets/images/posts/3.jpg";
import post4 from "../../assets/images/posts/4.jpg";
import post5 from "../../assets/images/posts/5.jpg";
import post6 from "../../assets/images/posts/6.jpg";
import post7 from "../../assets/images/posts/7.jpg";
import post8 from "../../assets/images/posts/8.jpg";

const Posts = () => {
    const data = [
        {
            field: "Illustration",
            title: "Japan House opens in mountainside to foster peak creativity.",
            auth: "Reta Torphy",
            image: post1
        },
        {
            field: "Photography",
            title: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
            auth: "Alessandra Ortiz",
            image: post2
        },
        {
            field: "Photography",
            title: "Bowlcut launch a new summer collection that pays homage to “UK legends”",
            auth: "Rosanna Ondricka",
            image: post3
        },
        {
            field: "Photography",
            title: "Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn",
            auth: "Annie Lueilwitz",
            image: post4
        },
        {
            field: "Interactive Design",
            title: "London-based Yinka Ilori’s storytelling furniture",
            auth: "Annie Lueilwitz",
            image: post5
        },
        {
            field: "Graphic Design",
            title: "Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck",
            auth: "Simeon Brekke",
            image: post6
        },
        {
            field: "Architecture",
            title: "Suzanne Saroff’s meticulously arranged photographs alter perceptions",
            auth: "Reta Torphy",
            image: post7
        },
        {
            field: "Graphic Design",
            title: "Anu Ambasna’s playful illustrations celebrate club culture, brown bodies and perfect paunches",
            auth: "Leo Bartell",
            image: post8
        }
      
    ]

    const[card, setCards] = useState(data)

    return (
        <section id="posts">
            <div className="container">
                <div className="wrapper">
                    <h5 className="posts__title">LATEST POSTS</h5>
                    <div className="posts__cards">
                        {card.map((item, index) => (
                            <div className="posts__card" key={index}>
                                <img src={item.image} alt="pic"/>
                                <div className="posts__card--body">
                                    <p className="posts__card--body-field">{item.field}</p>
                                    <p className="posts__card--body-title">{item.title}</p>
                                    <p className="posts__card--body-auth">By {item.auth}</p>
                                </div>
                             </div>
                        )
                        )}
                       
                    </div>
                    <button className="posts__btn">view all latest posts</button>
                </div>
            </div>
        </section>
    );
};

export default Posts;