import authorImageOne from '../../assets/images/home3/author.png';
import authorImageTwo from '../../assets/images/home3/author-2.png';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Component } from 'react';

const testimonials = [
    {
        id: 1,
        authorImage: authorImageOne,
        review: "“ Online proofing smart review allows pages within multi page documents to be treated as .Aproove was built to be content - based rather than proof - based.”",
        star: 5

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
                                <div className="testimonial-item">
                                    <div className="testi-author">
                                        <div className="test-shape-1"></div>
                                        <img src={authorImageOne} alt="" />
                                        <div className="test-shape-2"></div>
                                    </div>
                                    <div className="testi-quote">
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <p>
                                            “ Online proofing smart review allows pages within multi page documents to be treated as . Aproove was built to be content-based rather than proof-based. ”
                                    </p>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="testi-author">
                                        <div className="test-shape-1"></div>
                                        <img src={authorImageTwo} alt="" />
                                        <div className="test-shape-2"></div>
                                    </div>
                                    <div className="testi-quote">
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <p>
                                            “ Online proofing smart review allows pages within multi page documents to be treated as . Aproove was built to be content-based rather than proof-based. ”
                                    </p>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="testi-author">
                                        <div className="test-shape-1"></div>
                                        <img src={authorImageOne} alt="" />
                                        <div className="test-shape-2"></div>
                                    </div>
                                    <div className="testi-quote">
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <p>
                                            “ Online proofing smart review allows pages within multi page documents to be treated as . Aproove was built to be content-based rather than proof-based. ”
                                    </p>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="testi-author">
                                        <div className="test-shape-1"></div>
                                        <img src={authorImageTwo} alt="" />
                                        <div className="test-shape-2"></div>
                                    </div>
                                    <div className="testi-quote">
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <p>
                                            “ Online proofing smart review allows pages within multi page documents to be treated as . Aproove was built to be content-based rather than proof-based. ”
                                    </p>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="testi-author">
                                        <div className="test-shape-1"></div>
                                        <img src={authorImageOne} alt="" />
                                        <div className="test-shape-2"></div>
                                    </div>
                                    <div className="testi-quote">
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <p>
                                            “ Online proofing smart review allows pages within multi page documents to be treated as . Aproove was built to be content-based rather than proof-based. ”
                                    </p>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="testi-author">
                                        <div className="test-shape-1"></div>
                                        <img src={authorImageTwo} alt="" />
                                        <div className="test-shape-2"></div>
                                    </div>
                                    <div className="testi-quote">
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <p>
                                            “ Online proofing smart review allows pages within multi page documents to be treated as . Aproove was built to be content-based rather than proof-based. ”
                                    </p>
                                    </div>
                                </div>
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
                                <div role="presentation">
                                    <div className="author-meta">
                                        <h5>Rosalina D. William</h5>
                                        <p className="designation">Founder, Kilixer Co.</p>
                                    </div>
                                </div>
                                <div role="presentation">
                                    <div className="author-meta">
                                        <h5>Kane D. William</h5>
                                        <p className="designation">Ceo, Print Co.</p>
                                    </div>
                                </div>
                                <div role="presentation">
                                    <div className="author-meta">
                                        <h5>Thomas D. William</h5>
                                        <p className="designation">Founder, Print Co.</p>
                                    </div>
                                </div>
                                <div role="presentation">
                                    <div className="author-meta">
                                        <h5>Rosalina D. William</h5>
                                        <p className="designation">MD, Kilixer Co.</p>
                                    </div>
                                </div>
                                <div role="presentation">
                                    <div className="author-meta">
                                        <h5>Karolin William</h5>
                                        <p className="designation">Founder, Kilixer Co.</p>
                                    </div>
                                </div>
                                <div role="presentation">
                                    <div className="author-meta">
                                        <h5>Thomas D. William</h5>
                                        <p className="designation">Manager, Kilixer Co.</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default Testimonial;