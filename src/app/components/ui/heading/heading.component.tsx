import {Component} from "react";
import './heading.component.scss'

import {AnimationOnScroll} from "react-animation-on-scroll";

interface HeadingProps {
    children?: React.ReactNode;
    headingLevel?: string | number,
    steps?: number,
    hostClass?: string,
}

const chekTag: any = (level: HeadingProps) => {
    return ((level >= 1) && (level <= 6));
}

class HeadingComponent extends Component<HeadingProps> {
    constructor(props: HeadingProps) {
        super(props);
    }

    tagClass = () => {
        return chekTag(this.props.headingLevel) ? ('--h' + this.props.headingLevel) : '';
    }

    hasClass = () => {
        return (this.props.hostClass !== undefined ? ' ' + this.props.hostClass : '')
    }

    render() {
        let Tag: any = (chekTag(this.props.headingLevel) ? ('h' + this.props.headingLevel) : 'h1');

        return (
            <Tag className={`heading ${this.tagClass()}  ${this.hasClass()}`}
                 data-count={this.props.steps}>
                {this.props.children}
            </Tag>
        );
    }
}

export default HeadingComponent
