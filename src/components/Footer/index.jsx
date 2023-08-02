
import "./index.scss";

const index = () => {
    return (
        <footer>
            <div className="container">
                <div className="wrapper">
                    <div className="footer__top">
                        <p className="footer__top--title">Noiceland</p>
                        <p className="footer__top--year">© 2018 Noiceland™, all rights reserved</p>
                    </div>
                    <span className="line"></span>

                    <div className="footer__middle">
                        <div>
                            <p className="footer__middle--category">Categories</p>
                            <div className="footer__middle--list">
                                <ul className="text-white flex flex-col gap-y-[15px]">
                                    <li><a href="#">Animation</a></li>
                                    <li><a href="#">Interactive Design</a></li>
                                </ul>

                                <ul className="text-white flex flex-col gap-y-[15px]">
                                    <li><a href="#">Architecture</a></li>
                                    <li><a href="#">Miscellaneous</a></li>
                                </ul>

                                <ul className="text-white flex flex-col gap-y-[15px]">
                                    <li><a href="#">Graphic Design</a></li>
                                    <li><a href="#">Photography</a></li>
                                </ul>

                                <ul className="text-white flex flex-col gap-y-[15px]">
                                    <li><a href="#">Illustration</a></li>
                                    <li><a href="#">Product Design</a></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p className="footer__middle--category">Subscribe to newsletter</p>
                            <form action="#" className="footer__middle--form">
                                <input className="footer__middle--form-inp" type="email" placeholder="Email address"/>
                                <button className="footer__middle--form-btn" type="submit">send</button>
                            </form>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <div className="footer__card">
                            <p className="footer__card--title">Information</p>

                            <div className="footer__card--content">
                                <ul>
                                    <li><a href="#">about</a></li>
                                    <li><a href="#">contact</a></li>
                                    <li><a href="#">terms</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer__card">
                            <p className="footer__card--title">follow us</p>

                            <div className="footer__card--content">
                                <ul>
                                    <li><a href="#">instagram</a></li>
                                    <li><a href="#">facebook</a></li>
                                    <li><a href="#">twitter</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer__card">
                            <p className="footer__card--title">Template</p>

                            <div className="footer__card--content">
                                <ul>
                                    <li><a href="#">Image License Info</a></li>
                                    <li><a href="#">Powered by Webflow</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </footer>
    );
};

export default index;