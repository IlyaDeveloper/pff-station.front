import {Component} from "react";
import './heading.component.scss'

interface HeadingProps {
    children?: React.ReactNode;
    headingLevel?: string | number,
    hostClass?: string,
}

class HeadingComponent extends Component<HeadingProps> {
    validH1 = (this.props.headingLevel >= 1) && (this.props.headingLevel <= 6)

    tagClass = () => {
        return this.validH1 ? ('--h' + this.props.headingLevel) : '';
    }

    hasClass = () => {
        return (this.props.hostClass != undefined ? +' ' + this.props.hostClass : '')
    }

    render() {
        let Tag = ((this.validH1) ? ('h' + this.props.headingLevel) : 'h1');

        return (
            <Tag className={'heading ' + this.tagClass() + this.hasClass()}>{this.props.children}</Tag>
        );
    }
}

export default HeadingComponent
