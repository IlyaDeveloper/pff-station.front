import {Component} from "react";
import './tm.component.scss'

interface Tmrops {
    children?: React.ReactNode;
    onClick: () => void,
    hostClass: string,
}

class TmComponent extends Component<Tmrops> {
    render() {
        return (
            <button className={'button ' + this.props.hostClass} type="button" onClick={this.props.onClick}>
                {
                    this.props.children
                }
            </button>
        );
    }
}

export default TmComponent
