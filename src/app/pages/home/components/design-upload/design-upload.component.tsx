import './design-upload.component.scss';
import HeadingComponent from "../../../../components/ui/heading/heading.component";
import PictureWrapComponent from "../../../../components/picture-wrap/picture-wrap.component";
import {AnimationOnScroll} from 'react-animation-on-scroll';

import image1 from "../../../../../assets/images/img_1.jpg";
import image1x from "../../../../../assets/images/img_1x2.jpg";


const DesignUploadComponent = () => {
    return (
        <section className="design-upload">
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeInUp" offset={150} duration={2.2} delay={1}>
                    <HeadingComponent hostClass={'--counter --mob-center'} headingLevel={2} steps={1}>
                        Design & Upload<br/>
                        <span>PFP Collection</span>
                    </HeadingComponent>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInUp" offset={10} duration={2}>
                    <div className="design-upload__items">
                        <mark className="design-upload__item --cloud">
                            Upload your collection or create with free profile picture editor
                        </mark>
                        <mark className="design-upload__item --property">Set property of NFT-tokens</mark>
                        <mark className="design-upload__item --box">Free IPFS upload</mark>
                    </div>
                </AnimationOnScroll>

                <div className="design-upload__right">
                    <AnimationOnScroll animateIn="animate__zoomIn" offset={0} duration={1.5} delay={1}>
                        <PictureWrapComponent src={image1} srcset={image1x}/>
                    </AnimationOnScroll>
                </div>
            </div>

        </section>
    )
}

export default DesignUploadComponent
