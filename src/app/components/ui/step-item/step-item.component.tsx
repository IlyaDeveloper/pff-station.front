import {Component} from "react";
import './step-item.component.scss'

interface StepItemProps {
    children?: React.ReactNode;
    hostClass?: string,
    step?: number
}

class StepItemComponent extends Component<StepItemProps> {

    hasClass = () => {
        return (this.props.hostClass != undefined ? +' ' + this.props.hostClass : '')
    }

    render() {
        return (
            <div className={'step-item' + this.hasClass()} data-step={this.props.step}>
                <mark className={'step-item__capt'}>{this.props.children}</mark>
            </div>
        );
    }
}

export default StepItemComponent
