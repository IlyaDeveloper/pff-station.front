import {Component} from "react";
import './picture-wrap.component.scss'
import rightImage from '../../../assets/images/right-img.jpg'

interface PictureWrapProps {
    children?: React.ReactNode;
    hostClass?: string,
}

class PictureWrapComponent extends Component<PictureWrapProps> {
    render() {
        return (
            <article className={'picture-wrap'}>
                <picture>
                    <img src={rightImage} alt="pfp station"/>
                </picture>
            </article>
        );
    }
}

export default PictureWrapComponent
