import {Component} from "react";
import {Link} from "react-router-dom";

import './footer.component.scss'

interface FooterProps {
    // hostClass: string,
}

class FooterComponent extends Component<FooterProps> {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <mark className="footer__copy">© 2022 PFP Station All Rights Reserved.</mark>

                    <div className="footer__bottom">
                        <a className="footer__link" href="mailto: info@pfpstation.com"
                           target="_blank">info@pfpstation.com</a>
                        <div className="footer__links">
                            <Link className="footer__link" to="/agreement">Agreement</Link>
                            <Link className="footer__link" to="/terms">Terms of condition</Link>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterComponent
