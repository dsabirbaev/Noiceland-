
import { useState } from "react";

import img1 from "../../assets/images/featured/1.jpg";
import img2 from "../../assets/images/featured/2.jpg";
import img3 from "../../assets/images/featured/3.jpg";
import img4 from "../../assets/images/featured/4.jpg";

const FeaturedPosts = () => {

    const data = [
        {
            field: "Graphic Design",
            title: "A Brief History of the FIFA World Cup Logo",
            auth: "Clem Onojeghuo",
            image: img1
        },
        {
            field: "Graphic Design",
            title: "Need a guide to LA’s graphic design scene? Shoplifters’ new issue has got your back",
            auth: "Alessandra Ortiz",
            image: img2
        },
        {
            field: "Photography",
            title: "Fred Rowson directs film for Years and Years",
            auth: "Coby Gottlieb",
            image: img3
        },
        {
            field: "Illustration",
            title: "M&C Saatchi and Fontsmith collaborate on font collection for House of St Barnabas",
            auth: "Annie Lueilwitz",
            image: img4
        },
      
      
    ]

    const[card, setCards] = useState(data)

    return (
        <section id='featuredPosts'>
            <div className='container'>
                <div className='wrapper'>
                    <h5 className="featuredPosts__title">featured POSTS</h5>
                    <div className="featuredPosts__cards">
                            {card.map((item, index) => (

                                <div className="featuredPosts__card" key={index}>
                                    <img src={item.image} alt="pic"/>
                                    <div className="featuredPosts__card--body">
                                        <p className="featuredPosts__card--body-field">{item.field}</p>
                                        <p className="featuredPosts__card--body-title">{item.title}</p>
                                        <p className="featuredPosts__card--body-auth">By {item.auth}</p>
                                    </div>
                                 </div>
                            ))}
                           
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturedPosts;