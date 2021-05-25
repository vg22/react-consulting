import React from 'react';
import AboutOne from '../components/Abouts/AboutOne/AboutOne';
import BannerOne from '../components/Banners/BannerOne/BannerOne';
import BlogOne from '../components/Blogs/BlogOne/BlogOne';
import CallToActionOne from '../components/CallToActions/CallToActionOne/CallToActionOne';
import CallToActionTwo from '../components/CallToActions/CallToActionTwo/CallToActionTwo';
import FooterOne from '../components/Footers/FooterOne/FooterOne';
import FunFactOne from '../components/FunFacts/FunFactOne/FunFactOne';
import HeaderOne from '../components/Headers/HeaderOne/HeaderOne';
import MoveTop from '../components/MoveTop/MoveTop';
import PortfolioOne from '../components/Portfolios/PortfolioOne/PortfolioOne';
import ServiceOne from '../components/Services/ServiceOne/ServiceOne';
import SkillOne from '../components/Skills/SkillOne/SkillOne';
import StrategyOne from '../components/Strategies/StrategyOne/StrategyOne';

const Home = () => {
    return (
        <>
            <HeaderOne />

            {/* Banner Section */}
            <BannerOne />

            {/* About Section  */}
            <AboutOne />

            {/* Service Section  */}
            <ServiceOne />

            {/* Call To Action Section  */}
            <CallToActionOne />

            {/*Skill Section  */}
            <SkillOne />

            {/*StrategyOne Section  */}
            <StrategyOne />

            {/*Fun Facts Section  */}
            <FunFactOne />

            {/*Portfolio Section  */}
            <PortfolioOne />

            {/* Call To Action Two Section  */}
            <CallToActionTwo />

            {/* Blog Section  */}
            <BlogOne />

            {/* Footer Section  */}
            <FooterOne />

            {/* Move To Top  */}
            <MoveTop />
        </>
    );
};

export default Home;