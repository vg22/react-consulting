import authorImageOne from '../../assets/images/home3/author.png';
import authorImageTwo from '../../assets/images/home3/author-2.png';
import Slider from "react-slick";
import { Component } from 'react';

const testimonials = [
    {
        id: 1,
        review: "“ Online proofing smart review allows pages within multi page documents to be treated as .Aproove was built to be content - based rather than proof - based.”",
        stars: 5,
        authorName: 'Kane D William',
        designation: 'CEO, Print Co.',
        authorImage: authorImageOne
    },
    {
        id: 2,
        review: "“ Online proofing smart review allows pages within multi page documents to be treated as .Aproove was built to be content - based rather than proof - based.”",
        stars: 5,
        authorName: 'Rosalina D William',
        designation: 'CEO, Print Co.',
        authorImage: authorImageTwo
    }, {
        id: 3,
        review: "“ Online proofing smart review allows pages within multi page documents to be treated as .Aproove was built to be content - based rather than proof - based.”",
        stars: 5,
        authorName: 'Thomas D William',
        designation: 'CEO, Print Co.',
        authorImage: authorImageOne
    }, {
        id: 4,
        review: "“ Online proofing smart review allows pages within multi page documents to be treated as .Aproove was built to be content - based rather than proof - based.”",
        stars: 5,
        authorName: 'Kane D William',
        designation: 'CEO, Print Co.',
        authorImage: authorImageTwo
    }
];

class Testimonial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        const sliderSettings = {
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: true,
            centerMode: true,
            centerPadding: 0,
        }

        const navSettings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            centerMode: true,
            centerPadding: 0,
            focusOnSelect: true,
            slide: "ul",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        }

        return (
            <section className="testimonial-section ab-tesimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            {/* Slick Slider  */}

                            <Slider className="testimonial-slider"
                                asNavFor={this.state.nav2}
                                ref={slider => (this.slider1 = slider)}
                                {...sliderSettings}
                            >
                                {
                                    testimonials?.map(testimonial => {
                                        return (
                                            <div key={testimonial?.id} className="testimonial-item">
                                                <div className="testi-author">
                                                    <div className="test-shape-1"></div>
                                                    <img src={testimonial.authorImage} alt="" />
                                                    <div className="test-shape-2"></div>
                                                </div>
                                                <div className="testi-quote">
                                                    <div className="rating">
                                                        {Array.from(Array(testimonial.stars), (e, i) => {
                                                            return <i key={i} className="fa fa-star"></i>
                                                        })}
                                                    </div>
                                                    <p>
                                                        “ Online proofing smart review allows pages within multi page documents to be treated as . Aproove was built to be content-based rather than proof-based. ”
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>

                            <Slider
                                className="slider-nav"
                                asNavFor={this.state.nav1}
                                ref={slider => (this.slider2 = slider)}
                                slidesToShow={3}
                                swipeToSlide={true}
                                focusOnSelect={true}
                                {...navSettings}
                            >
                                {
                                    testimonials?.map(testimonial => {
                                        return (
                                            <div key={testimonial?.id} role="presentation">
                                                <div className="author-meta">
                                                    <h5>{testimonial.authorName}</h5>
                                                    <p className="designation">{testimonial.designation}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default Testimonial;