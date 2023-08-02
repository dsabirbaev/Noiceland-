
import "./index.scss";

const index = () => {
    return (
        <header >
            <div className="container">
                <nav className="nav">
                    <a href="#" className="nav__logo">NOICELAND</a>
                    <ul className="nav__list">
                        <li className="nav__list--item"><a className="nav__list--item-link" href="#">Home</a></li>
                        <li className="nav__list--item"><a className="nav__list--item-link" href="#">Latest</a></li>
                        <li className="nav__list--item"><a className="nav__list--item-link" href="#">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default index;