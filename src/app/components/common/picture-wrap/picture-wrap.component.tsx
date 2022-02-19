import {Component} from "react";
import './picture-wrap.component.scss'

interface PictureWrapProps {
    children?: React.ReactNode;
    src?: any,
    srcset?: any,
    hostClass?: string,
}

class PictureWrapComponent extends Component<PictureWrapProps> {
    render() {
        return (
            <article className={'picture-wrap'}>
                <picture className={'picture-wrap__pic'}
               >
                    <source srcSet={this.props.srcset || this.props.src}
                            media='min-width: 1100px'/>
                    <img src={this.props.src} alt="pfp station"/>
                </picture>
            </article>
        );
    }
}

export default PictureWrapComponent
