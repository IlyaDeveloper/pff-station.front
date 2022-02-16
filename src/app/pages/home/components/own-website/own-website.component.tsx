import './own-website.component.scss'
import HeadingComponent from "../../../../components/ui/heading/heading.component";
import PictureWrapComponent from "../../../../components/picture-wrap/picture-wrap.component";
import GetStartedComponent from "../../../../components/ui/get-started/get-started.component";
import {AnimationOnScroll} from "react-animation-on-scroll";

import image2 from "../../../../../assets/images/img_2.jpg";
import image2x from "../../../../../assets/images/img_2x2.jpg";


const OwnWebsiteComponent = () => {
    return (
        <section className='own-website'>
            <div className="container">
                <div className="own-website__left">
                    <AnimationOnScroll animateIn="animate__fadeInUp" offset={150} duration={2.2} delay={1}>
                        <HeadingComponent hostClass={'--counter'} headingLevel={2} steps={3}>
                            Make<br/>
                            your <span>own website</span><br/>
                            to sell NFT
                        </HeadingComponent>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeInUp" offset={150} duration={1.5} delay={1}>
                        <ul className="own-website__list">
                            <li>Free website editor</li>
                            <li>Use your own domain if you want</li>
                        </ul>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__zoomIn" offset={0} duration={1.5} delay={1}>
                        <GetStartedComponent/>
                    </AnimationOnScroll>
                </div>

                <div className='own-website__right'>
                    <AnimationOnScroll animateIn="animate__zoomIn" offset={0} duration={1.5} delay={1}>
                        <PictureWrapComponent src={image2} srcset={image2x}/>
                    </AnimationOnScroll>
                </div>
            </div>
        </section>
    );
}

export default OwnWebsiteComponent
