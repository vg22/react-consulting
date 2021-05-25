import { Link } from 'react-router-dom';
import partnerOneImage from '../../../assets/images/home/client-logo/1.png';
import partnerTwoImage from '../../../assets/images/home/client-logo/2.png';
import partnerThreeImage from '../../../assets/images/home/client-logo/3.png';
import partnerFourImage from '../../../assets/images/home/client-logo/4.png';
import partnerFiveImage from '../../../assets/images/home/client-logo/5.png';
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Autoplay
} from 'swiper/core';

SwiperCore.use([Autoplay]);

const partners = [
    {
        id: 1,
        image: partnerOneImage,
        link: '#'
    },
    {
        id: 2,
        image: partnerTwoImage,
        link: '#'
    },
    {
        id: 3,
        image: partnerThreeImage,
        link: '#'
    },
    {
        id: 4,
        image: partnerFourImage,
        link: '#'
    },
    {
        id: 5,
        image: partnerFiveImage,
        link: '#'
    },
    {
        id: 6,
        image: partnerOneImage,
        link: '#'
    },
    {
        id: 7,
        image: partnerTwoImage,
        link: '#'
    },
    {
        id: 8,
        image: partnerThreeImage,
        link: '#'
    },
    {
        id: 9,
        image: partnerFourImage,
        link: '#'
    },
    {
        id: 10,
        image: partnerFiveImage,
        link: '#'
    }
];

const slides = [];

for (let i = 0; i < partners.length; i++) {
    slides.push(
        <SwiperSlide style={{ marginRight: '0px' }} className="client-logo" key={partners[i]?.id}>
            <div className="item">
                <Link to={partners[i]?.link}>
                    <img src={partners[i]?.image} alt="" />
                </Link>
            </div>
        </SwiperSlide>
    );
}

const PartnerOne = () => {
    return (
        <Swiper
            loop={true}
            autoplay={true}
            className="slider-wrapper"
            breakpoints={{
                640: {
                    width: 640,
                    slidesPerView: 1,
                },
                768: {
                    width: 768,
                    slidesPerView: 2,
                },
                1024: {
                    width: 1024,
                    slidesPerView: 3,
                },
            }}
        >
            {slides}
        </Swiper>
    );
};

export default PartnerOne;