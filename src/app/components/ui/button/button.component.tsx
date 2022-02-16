import {ButtonHTMLAttributes, Component} from "react";
import './button.component.scss'


interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void,
    type?: any,
    hostClass?: string,
}

class ButtonComponent extends Component<ButtonProps> {
    render() {
        return (
            <button className={`button ${this.props.hostClass || ''}`}
                    type={this.props.type || 'button'}
                    onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
}

export default ButtonComponent
