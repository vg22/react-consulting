import { Link } from 'react-router-dom';
import heroShape from '../../../assets/images/home/hero-shape.png';
import heroBgImage from '../../../assets/images/home/hero.jpg';
import Video from '../../Video/Video';

const BannerOne = () => {
    return (
        <section className="hero-banner-01" style={{ backgroundImage: `url(${heroBgImage})` }} >
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-10">
                        <div className="banner-content">
                            <div className="sub-heading">
                                One of the best consulting agency
                        	</div>
                            <h1>Get Solutions</h1>
                            <p>
                                We'll start with consulting's definition according to the Oxford Dictionary. Consulting means “engaged in the business of giving expert advice.
                            </p>

                            <ul>
                                <li><Link className="quomodo-btn" to="/">Get Started Now <i className="fa fa-long-arrow-right"></i></Link></li>
                                <li>
                                    <Video videoLink="LXb3EKWsInQ" title="Intro Video" />
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Shape --> */}
            <div className="hero-shape"><img src={heroShape} alt="" /></div>

        </section>
    );
};

export default BannerOne;