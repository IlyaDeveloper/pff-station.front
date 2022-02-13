import {Component} from "react";
import './step-item.component.scss'

interface StepItemProps {
    children?: React.ReactNode;
    hostClass?: string,
    step?: number
}

class StepItemComponent extends Component<StepItemProps> {
    render() {
        return (
            <div className={'step-item' + this.props.hostClass} data-step={this.props.step}>
                <mark className={'step-item__capt'}>{this.props.children}</mark>
            </div>
        );
    }
}

export default StepItemComponent
