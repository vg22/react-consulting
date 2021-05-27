import { Link } from 'react-router-dom';
import partnerOneImage from '../../../assets/images/home/client-logo/1.png';
import partnerTwoImage from '../../../assets/images/home/client-logo/2.png';
import partnerThreeImage from '../../../assets/images/home/client-logo/3.png';
import partnerFourImage from '../../../assets/images/home/client-logo/4.png';
import partnerFiveImage from '../../../assets/images/home/client-logo/5.png';
import Slider from "react-slick";

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

const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: false,
    centerMode: false,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        },

    ]
};

const PartnerOne = () => {
    return (
        <Slider className="client-logo owl-carousel" {...settings}>
            {
                partners?.map(partner => {
                    return (
                        <Link key={partner?.id} to={partner?.link}>
                            <img src={partner?.image} alt="" />
                        </Link>
                    )
                })
            }
        </Slider>
    );
};

export default PartnerOne;