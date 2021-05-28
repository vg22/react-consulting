import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactSidebar from '../components/ContactSidebar/ContactSidebar';

const contactInfo = {
    numberOne: "+00 125 456 888",
    numberTwo: "+00 125 456 888",
    emailOne: "contact@pritom.com",
    emailTwo: "contact@pritom.com",
    locationOne: "445 Main Street, New York",
    locationTwo: "CA-12325, USA"
};

const Contact = () => {
    return (
        <>
            {/* Page Banner section  */}
            <BannerTwo pageTitle="Contact Us" title="Contact" />

            <section className="contact-page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="sub-title-2"><span>Contact</span></div>
                            <h3 className="sec-title">Get In Touch</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="contact-page-form">
                                {/* Contact Form  */}
                                <ContactForm />
                            </div>
                        </div>

                        {/* Contact sidebar  */}
                        <ContactSidebar contactInfo={contactInfo} />

                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="quomodo-map grayscale">
                                <iframe src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;coord=39.966528,-75.158284&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=p&amp;z=16&amp;iwloc=B&amp;output=embed" scrolling="no"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Contact;