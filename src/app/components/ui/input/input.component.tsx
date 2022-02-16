import {Component} from "react";

import './input.component.scss'

interface InputProps {
    children?: React.ReactNode;
    type?: string,
    name?: string,
    placeholder?: string,
    onChange?: any,
    hostClass?: string,
    value?: any,
}

class InputComponent extends Component<InputProps> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={`input ${this.props.hostClass || ''}`}>
                <input className={'input__field'}
                       type={this.props.type || 'text'}
                       name={this.props.name || ''}
                       placeholder={this.props.placeholder}
                       value={this.props.value}
                       onChange={this.props.onChange}
                />
            </div>
        );
    }
}

export default InputComponent
