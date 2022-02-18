import './welcome.component.scss'
import HeadingComponent from "../../../../components/ui/heading/heading.component";
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow, Autoplay} from 'swiper';

import image_welocme_1 from '../../../../../assets/images/swiper/s1.svg';
import image_welocme_2 from '../../../../../assets/images/swiper/s2.svg';
import image_welocme_3 from '../../../../../assets/images/swiper/s3.svg';
import image_welocme_4 from '../../../../../assets/images/swiper/s4.svg';
import image_welocme_5 from '../../../../../assets/images/swiper/s5.svg';
import image_welocme_6 from '../../../../../assets/images/swiper/s6.png';
import image_welocme_7 from '../../../../../assets/images/swiper/s7.svg';
import image_welocme_8 from '../../../../../assets/images/swiper/s8.svg';
import image_welocme_9 from '../../../../../assets/images/swiper/s9.svg';

const COVER_FLOW_EFFECT: object = {
    rotate: 0,
    stretch: -100,
    depth: 100,
    modifier: 0,
    scale: 0,
    slideShadows: false,
    transformEl: '.--slideEffect'
};

const WELCOME_SLIDER_IMAGES: any = [
    {image: image_welocme_1, alt: 'picture nft'},
    {image: image_welocme_2, alt: 'picture nft'},
    {image: image_welocme_3, alt: 'picture nft'},
    {image: image_welocme_4, alt: 'picture nft'},
    {image: image_welocme_5, alt: 'picture nft'},
    {image: image_welocme_6, alt: 'picture nft'},
    {image: image_welocme_7, alt: 'picture nft'},
    {image: image_welocme_8, alt: 'picture nft'},
    {image: image_welocme_9, alt: 'picture nft'},
];
const slider = () => {
    console.log('slide change')
};

const onSwiper = (swiper: any) => {
    let elm = swiper.srcElement

    console.log('sss', swiper)
}

const WelcomeComponent = () => {
    return (
        <section className="welcome">
            <div className="container">
                <HeadingComponent>Make and sell your own<br/>Profile Picture NTF</HeadingComponent>

                {/*<p className="welcome__text">No code.&nbsp;&nbsp;No gas fee.&nbsp;&nbsp;For free.</p>*/}

                <div className="welcome__slider">
                    <Swiper
                        modules={[EffectCoverflow, Autoplay]}
                        effect="coverflow"
                        coverflowEffect={COVER_FLOW_EFFECT}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            // disableOnInteraction: false,
                            delay: 1500,
                            // stopOnLastSlide: true
                        }}
                        spaceBetween={0}
                        slidesPerView={'auto'}
                        onSlideChange={slider}
                        onSwiper={onSwiper}
                        longSwipesRatio={0}
                        longSwipes={false}>

                        {WELCOME_SLIDER_IMAGES.map((item: any, i: number) => {
                            return (
                                <SwiperSlide key={i}>
                                    <picture className="welcome__pic">
                                        <img src={item.image} alt={item.alt}/>
                                    </picture>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default WelcomeComponent;
