import {Component} from "react";
import LogoComponent from "../../ui/logo/logo.component";

interface HeaderProps {
    children?: React.ReactNode;
    hostClass?: string,
}

class HeaderComponent extends Component<HeaderProps> {
    render() {
        return (
            <header className={'header ' + this.props.hostClass}>
                <LogoComponent/>
            </header>
        )
    }
}

export default HeaderComponent
