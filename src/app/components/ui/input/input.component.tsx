import {Component} from "react";

import './input.component.scss'

interface InputProps {
    children?: React.ReactNode;
    type?: string,
    placeholder: string,
    hostClass?: string,
}

class InputComponent extends Component<InputProps> {
    render() {
        return (
            <div className={'input ' + this.props.hostClass}>
                <input className={'input__field'} type={this.props.type || 'text'} placeholder={this.props.placeholder}/>
            </div>
        );
    }
}

export default InputComponent
