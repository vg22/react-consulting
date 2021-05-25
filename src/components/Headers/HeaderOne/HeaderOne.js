import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

const HeaderOne = () => {
    return (
        <header className="header-01">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                            {/* <!-- logo Start--> */}
                            <Link className="navbar-brand" to="/">
                                <img src={logo} alt="" />
                            </Link>
                            {/* <!-- logo End--> */}

                            {/* <!-- Moblie Btn Start --> */}
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            {/* <!-- Moblie Btn End --> */}

                            {/* <!-- Nav Menu Start --> */}
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="dropdown nav-item">
                                        <Link className="nav-link" to="#" data-toggle="dropdown">Home</Link>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><Link className="dropdown-item" to="index.html">Home One</Link></li>
                                            <li><Link className="dropdown-item" to="index-2.html">Home Two</Link></li>
                                            <li><Link className="dropdown-item" to="index-3.html">Home Three</Link></li>
                                            <li><Link className="dropdown-item" to="index-4.html">Home Four</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="about.html">About</Link>
                                    </li>
                                    <li className="dropdown nav-item">
                                        <Link className="nav-link" to="#" data-toggle="dropdown">Services</Link>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><Link className="dropdown-item" to="service.html">Service Page</Link></li>
                                            <li><Link className="dropdown-item" to="single-service.html">Service Details</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown nav-item">
                                        <Link className="nav-link" to="#" data-toggle="dropdown">Portfolios</Link>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><Link className="dropdown-item" to="portfolio.html">Portfolio Page</Link></li>
                                            <li><Link className="dropdown-item" to="single-portfolio.html">Portfolio Details</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown nav-item">
                                        <Link className="nav-link" to="#" data-toggle="dropdown">News</Link>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><Link className="dropdown-item" to="news.html">News Page</Link></li>
                                            <li><Link className="dropdown-item" to="single-post.html">News Details</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="contact.html">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Nav Menu End --> */}

                            {/* <!-- Search Btn --> */}
                            <div className="search-area">
                                <Link to="#" className="search-btn"><i className="fa fa-search"></i></Link>
                                <form role="search" method="get" className="searchForms" action="#">
                                    <input type="search" placeholder="Type and Hit Enter..." name="s" />
                                    <button type="submit" className="search-submit"><i className="twi-search2"></i></button>
                                </form>
                            </div>
                            {/* Contact Btn End  */}

                            {/* <!-- Appointment Btn --> */}
                            <Link to="contact.html" className="appoint-btn">Get Appointment <i className="fa fa-long-arrow-right"></i></Link>
                            {/* <!-- Contact Btn End --> */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderOne;