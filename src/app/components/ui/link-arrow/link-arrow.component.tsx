import {Component} from "react";
import './link-arrow.component.scss'
import {Link} from "react-router-dom";

interface LinkArrowProps {
    children?: React.ReactNode;
    onClick: () => void,
    hostClass: string,
}

class LinkArrowComponent extends Component<LinkArrowProps> {
    render() {
        return (
            <Link to={'/sd'}></Link>
        );
    }
}

export default LinkArrowComponent
