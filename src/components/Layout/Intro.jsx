
import bannerpic from "../../assets/images/banner.jpg"

const Intro = () => {
    return (
        <section id="intro">
            <div className="container">
                <div className="wrapper">
                    <img title="picture" className="intro__banner" src={bannerpic} alt="image" />
                    <div className="intro__content">
                        <h5 className="intro__content--field">Illustration</h5>
                        <h1 className="intro__content--title">Japan House opens in mountainside to foster peak creativity.</h1>
                        <p className="intro__content--text">Enim omittam qui id, ex quo atqui dictas complectitur. Nec ad timeam accusata, hinc justo falli id eum, ferri novum molestie eos cu.</p>
                        <h6 className="intro__content--auth">By Reta Torphy</h6>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;