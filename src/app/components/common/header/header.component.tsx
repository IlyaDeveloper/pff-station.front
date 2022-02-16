import {Component} from "react";
import LogoComponent from "../../ui/logo/logo.component";
import ButtonComponent from "../../ui/button/button.component";
import {Link} from "react-router-dom";

import './header.component.scss'

interface HeaderProps {
    children?: React.ReactNode;
    hostClass?: string
}

interface HeaderState {
    activeClass?: string
}

class HeaderComponent extends Component<HeaderProps, HeaderState> {

    private elmHtml: HTMLElement = document.getElementsByTagName('html')[0];

    constructor(
        props: any
    ) {
        super(props);

        this.state = {activeClass: ''};
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            let activeClass: string;

            (window.scrollY > 5)
                ? (activeClass = '--border-null')
                : (activeClass = '');

            (window.scrollY > 5)
                ? (this.elmHtml.setAttribute('style', '--header-height: 4.25rem'))
                : (this.elmHtml.setAttribute('style', ''));

            this.setState({activeClass});
        });
    }

    render() {
        return (
            <header
                className={`header ${this.props.hostClass || ''} ${this.state.activeClass}`}>
                <div className="header__wrap">
                    <div className="header__logo"><LogoComponent/></div>

                    <div className="header__right">
                        {/*<Link to={'/auth'}><ButtonComponent hostClass={'--null'}>Sign in</ButtonComponent></Link>*/}
                        {/*<Link to={'/auth'}><ButtonComponent>Sign up</ButtonComponent></Link>*/}
                    </div>
                </div>
            </header>
        )
    }
}

export default HeaderComponent
