import {Component} from "react";
import LogoComponent from "../../ui/logo/logo.component";
import ButtonComponent from "../../ui/button/button.component";

import './header.component.scss'

interface HeaderProps {
    children?: React.ReactNode;
    hostClass?: string,
}

class HeaderComponent extends Component<HeaderProps> {
    render() {
        return (
            <header className={'header ' + this.props.hostClass}>
                <div className="container">
                    <div className="header__logo"><LogoComponent/></div>

                    <div className="header__btns">
                        <ButtonComponent hostClass={'--null'}>Sign in</ButtonComponent>
                        <ButtonComponent >Sign up</ButtonComponent>
                    </div>
                </div>
            </header>
        )
    }
}

export default HeaderComponent
