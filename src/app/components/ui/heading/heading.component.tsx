import {Component} from "react";
import 'heading.component.scss'

interface HeadingProps {
    children?: React.ReactNode;
    headingLevel?: string | number,
    hostClass?: string,
}

class HeadingComponent extends Component<HeadingProps> {

    checkLevel(): string {
        let level = this.props.headingLevel
        return (level >= 2) && (level <= 6) ? ('--h' + this.props.headingLevel) : null
    }

    render() {
        const Tag = () => {
            let level = this.props.headingLevel
            return (level >= 1) && (level <= 6) ? ('h' + this.props.headingLevel) : 'h1';
        }

        return (
            <Tag className={'heading ' + this.checkLevel() + this.props.hostClass}>{this.props.children}</Tag>
        );
    }
}

export default HeadingComponent
