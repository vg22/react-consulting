import { Link } from "react-router-dom";

const pricings = [
    {
        id: 1,
        name: 'Advanced',
        price: 99,
        description: 'One Time Installation',
        features: [
            'Core Level Support', 'PSD To HTML Support', 'Wordpress Instalation', '24/7 Online Support', 'Certified SSL'
        ],
        buttonText: 'Purchase Now',
        buttonLink: '/',
        class: ''
    },
    {
        id: 2,
        name: 'Team',
        price: 199,
        description: 'One Time Installation',
        features: [
            'Core Level Support', 'PSD To HTML Support', 'Wordpress Installation', '24/7 Online Support', 'Certified SSL'
        ],
        buttonText: 'Purchase Now',
        buttonLink: '/',
        class: 'p-team'
    },
    {
        id: 3,
        name: 'Family',
        price: 999,
        description: 'One Time Installation',
        features: [
            'Core Level Support', 'PSD To HTML Support', 'Wordpress Installation', '24/7 Online Support', 'Certified SSL'
        ],
        buttonText: 'Purchase Now',
        buttonLink: '/',
        class: 'p-family'
    }
]

const Pricing = () => {
    return (
        <section className="pricing-section-2 width-bg">
            <div className="container">
                <div className="row">

                    {/* <!-- pricing item start --> */}
                    {
                        pricings?.map(pricing => {
                            return (
                                <div key={pricing?.id} className="col-lg-4 col-md-6">

                                    <div className={`pricing-item text-center ${pricing?.class}`}>
                                        <p className="pack-name">{pricing?.name}</p>
                                        <div className="price"><span>$</span>{pricing?.price}</div>
                                        <p className="description">{pricing?.description}</p>
                                        <ul>
                                            {
                                                pricing.features.map((feature, index) => <li key={index}><i className="fa fa-check"></i>{feature}</li>)
                                            }
                                        </ul>
                                        <Link className="quomodo-btn" to={pricing?.buttonLink}>{pricing?.buttonText}</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <!-- pricing item start --> */}

                </div>
            </div>
        </section>
    );
};

export default Pricing;