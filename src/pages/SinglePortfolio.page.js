import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
import PortfolioImage from '../assets/images/portfolio-details/1.jpg';
import PortfolioContent from '../components/PortfolioContent/PortfolioContent';

const portfolio = {
    featureImg: PortfolioImage,
    projectName: "Miranda Consultancy App",
    clientName: "Miranda H. Halim",
    date: "30 December 2020",
    tag: ["App", "Software", "Website"],
    link: '/'
}

const SinglePortfolio = () => {
    return (
        <>
            {/* Page Banner section  */}
            <BannerTwo pageTitle="Portfolio Details" title="Miranda Office Consultancy" />

            {/* Page Banner section  */}
            <PortfolioContent portfolio={portfolio} />

        </>
    );
};

export default SinglePortfolio;