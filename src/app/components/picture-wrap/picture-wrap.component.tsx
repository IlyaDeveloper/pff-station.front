import {Component} from "react";
import './picture-wrap.component.scss'

interface PictureWrapProps {
    children?: React.ReactNode;
    hostClass: string,
}

class PictureWrapComponent extends Component<PictureWrapProps> {
    render() {
        return (
            <article className={'picture-wrap'}>
                <picture>
                    <img src="assets/img/right-img.jpeg" alt="pfp station"/>
                </picture>
            </article>    
        );
    }
}

export default PictureWrapComponent
