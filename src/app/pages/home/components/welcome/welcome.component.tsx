import './welcome.component.scss'
import HeadingComponent from "../../../../components/ui/heading/heading.component";
import {Swiper, SwiperSlide} from 'swiper/react';

const WelcomeComponent = () => {
    const images = [
        {image: 's1.svg', alt: ''},
        {image: 's2.svg', alt: ''},
        {image: 's3.svg', alt: ''},
        {image: 's4.svg', alt: ''},
        {image: 's5.svg', alt: ''},
        {image: 's6.svg', alt: ''},
        {image: 's7.svg', alt: ''},
        {image: 's8.svg', alt: ''},
        {image: 's9.svg', alt: ''},
    ];

    return (
        <section className={'welcome'}>
            <HeadingComponent headingLevel={1}>
                Make and sell your own Profile Picture NTF
            </HeadingComponent>
            <p>No code.&nbsp;&nbsp;No gas fee.&nbsp;&nbsp;For free.</p>
            <div className="welcome__slider">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >

                    {images.map(item => {
                        return (
                            <SwiperSlide>
                                <picture>
                                    <img src={'assets/images/swiper/' + item.image} alt={item.alt}/>
                                </picture>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    );
}

export default WelcomeComponent
