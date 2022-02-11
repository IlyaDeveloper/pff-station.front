import {Component} from "react";
import './tm.component.scss'

interface Tmrops {
    children?: React.ReactNode;
    type?: string,
    placeholder: string,
    hostClass?: string,
}

class InputComponent extends Component<Tmrops> {
    render() {
        return (
            <div className={'input ' + this.props.hostClass}>
                <input className={'input__field'} type={this.props.type || 'text'} placeholder={this.props.placeholder}/>
            </div>
        );
    }
}

export default InputComponent
