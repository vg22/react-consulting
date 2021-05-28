import { Link } from 'react-router-dom';
import ThemeSlider from '../../Sliders/ThemeSlider/ThemeSlider';
import partnerOneImage from '../../../assets/images/home/client-logo/1.png';
import partnerTwoImage from '../../../assets/images/home/client-logo/2.png';
import partnerThreeImage from '../../../assets/images/home/client-logo/3.png';
import partnerFourImage from '../../../assets/images/home/client-logo/4.png';
import partnerFiveImage from '../../../assets/images/home/client-logo/5.png';

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

const FooterOne = () => {
    return (
        <footer className="footer-01">

            {/* Partner Slider Section  */}
            <ThemeSlider images={partners} classes="client-logo owl-carousel" settings={settings} />

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-border"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        {/* <!-- Navigation Menu Start --> */}
                        <aside className="widget">
                            <h3 className="widget-title">Company</h3>
                            <ul>
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Leadership</Link></li>
                                <li><Link to="/">Blog</Link></li>
                                <li><Link to="/">Careers</Link></li>
                                <li><Link to="/">Partners</Link></li>
                                <li><Link to="/">Referral Program</Link></li>
                                <li><Link to="/">Press</Link></li>
                                <li><Link to="/">Legal</Link></li>
                            </ul>
                        </aside>
                        {/* <!-- Navigation Menu End --> */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        {/* <!-- Navigation Menu Start --> */}
                        <aside className="widget">
                            <h3 className="widget-title">Community</h3>
                            <ul>
                                <li><Link to="/">Tutorials</Link></li>
                                <li><Link to="/">Meetups</Link></li>
                                <li><Link to="/">Q&A</Link></li>
                                <li><Link to="/">Write for DOnations</Link></li>
                                <li><Link to="/">Droplets for Demos</Link></li>
                                <li><Link to="/">Hatch Startup Program</Link></li>
                                <li><Link to="/">Shop Swag</Link></li>
                                <li><Link to="/">Research Program</Link></li>
                            </ul>
                        </aside>
                        {/* <!-- Navigation Menu End --> */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        {/* <!-- Navigation Menu Start --> */}
                        <aside className="widget">
                            <h3 className="widget-title">Solutions</h3>
                            <ul>
                                <li><Link to="/">Web & Mobile Apps</Link></li>
                                <li><Link to="/">Website Hosting</Link></li>
                                <li><Link to="/">Big Data</Link></li>
                                <li><Link to="/">Managed Services</Link></li>
                                <li><Link to="/">Business Solutions</Link></li>
                                <li><Link to="/">Research Program</Link></li>
                                <li><Link to="/">Currents Research</Link></li>
                                <li><Link to="/">Open Source</Link></li>
                            </ul>
                        </aside>
                        {/* <!-- Navigation Menu End --> */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        {/* <!-- Navigation Menu Start --> */}
                        <aside className="widget">
                            <h3 className="widget-title">Solutions</h3>
                            <ul>
                                <li><Link to="/">Get Support</Link></li>
                                <li><Link to="/">Trouble Signing In?</Link></li>
                                <li><Link to="/">Sales</Link></li>
                                <li><Link to="/">Report Abuse</Link></li>
                                <li><Link to="/">System Status</Link></li>
                            </ul>
                        </aside>
                        {/* <!-- Navigation Menu End --> */}

                        {/* <!-- Quote Btn Start --> */}
                        <aside className="widget">
                            <Link className="quomodo-btn" to="/">Get A Quote <i className="fa fa-long-arrow-right"></i></Link>
                        </aside>
                        {/* <!-- Quote Btn  End --> */}
                    </div>
                </div>
                {/* <!-- Copyright --> */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright clearfix">
                            <ul>
                                <li><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
                                <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                                <li><Link to="/"><i className="fa fa-behance"></i></Link></li>
                                <li><Link to="/"><i className="fa fa-youtube"></i></Link></li>
                                <li><Link to="/"><i className="fa fa-linkedin"></i></Link></li>
                            </ul>
                            <p>Design By@Example</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Copryright --> */}
            </div>
        </footer>
    );
};

export default FooterOne;