import {Component} from "react";
import './tm.component.scss'

interface Tmrops {
    children?: React.ReactNode;
    hostClass?: string,
    step?: number
}

class StepItemComponent extends Component<Tmrops> {
    render() {
        return (
            <div className={'step-item' + this.props.hostClass} dataStep={this.props.step}>
                <mark className={'step-item__capt'}>{this.props.children}</mark>
            </div>
        );
    }
}

export default StepItemComponent
