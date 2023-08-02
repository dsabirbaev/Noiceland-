import { useState } from "react";

import pic1 from "../../assets/images/cards/1.jpg";
import pic2 from "../../assets/images/cards/2.jpg";
import pic3 from "../../assets/images/cards/3.jpg";
import pic4 from "../../assets/images/cards/4.jpg";
import pic5 from "../../assets/images/cards/5.jpg";
import pic6 from "../../assets/images/cards/6.jpg";

const Cards = () => {
    const data = [
        {
            field: "Photography",
            title: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
            auth: "Alessandra Ortiz",
            image: pic1
        },
        {
            field: "Photography",
            title: "Bowlcut launch a new summer collection that pays homage to “UK legends”",
            auth: "Alessandra Ortiz",
            image: pic2
        },
        {
            field: "Photography",
            title: "Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn",
            auth: "Annie Lueilwitz",
            image: pic3
        },
        {
            field: "Interactive Design",
            title: "London-based Yinka Ilori’s storytelling furniture",
            auth: "Annie Lueilwitz",
            image: pic4
        },
        {
            field: "Graphic Design",
            title: "Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck",
            auth: "Simeon Brekke",
            image: pic5
        },
        {
            field: "Architecture",
            title: "Suzanne Saroff’s meticulously arranged photographs alter perceptions",
            auth: "Reta Torphy",
            image: pic6
        }
    ]
    const[card, setCards] = useState(data)
   
    return (
        <section id="cards">
            <div className="container">
                <div className="wrapper">
                    {card.map((item,index) => (
                        
                        <div className="card" key={index}>
                          <img src={item.image} alt="pic" />
                          <div className="card__body">
                              <p className="card__body--field">{item.field}</p>
                              <p className="card__body--title">{item.title}</p>
                              <p className="card__body--auth">By {item.auth}</p>
                          </div>
                      </div>
                    )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Cards;