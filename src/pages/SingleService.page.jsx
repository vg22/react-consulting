import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
import SingleServiceContent from '../components/SingleServiceContent/SingleService';
import singleServiceImage from '../assets/images/service-details/1.jpg'
import Platform from '../components/Platform/Platform';
import ImageGrid from '../components/ImageGrid/ImageGrid';
import Pricing from '../components/Pricing/Pricing';
import GridImageOne from '../assets/images/service-details/2.jpg';
import GridImageTwo from '../assets/images/service-details/3.jpg';
import GridImageThree from '../assets/images/service-details/4.jpg';
import CallToActionThree from '../components/CallToActions/CallToActionThree/CallToActionThree';
const gridImages = [GridImageOne, GridImageTwo, GridImageThree];

const service = {
    title: 'Expert IT Services For The Cloud Service',
    description: `
        <p>
            <span>M</span>ost managed services firms offer only outsourcing or project management support. What makes our Managed Solutions different
            is that we provide teams that combine highly regarded consulting solutions and technologies with a vast network of experienced
            operational talent to implement those solutions.
        </p>
        <p>
            Humans have been storing, retrieving, manipulating, and communicating information since the Sumerians in Mesopotamia developed writing in about 3000 BC,[3] but the term information technology in its modern sense first appeared in a 1958 article published in the Harvard Business Review; authors Harold J. Leavitt and Thomas L. Whisler commented that "the new technology does not yet have a single established name. We shall call it information technology (IT)." Their definition consists of three categories: techniques for processing, the application of statistical and mathematical methods to decision-making, and the simulation of higher-order thinking through computer programs.
        </p>
        <p>
            Electronic computers, using either relays or valves, began to appear in the early 1940s. The electromechanical Zuse Z3, completed in 1941, was the world's first programmable computer, and by modern standards one of the first machines that could be considered a complete computing machine. Colossus, developed during the Second World War to decrypt German messages, was the first electronic digital computer. Although it was programmable, it was not general-purpose, being designed to perform only a single task. It also lacked the ability to store its program in memory; programming was carried out using plugs and switches to alter the internal wiring.[10] The first recognisably modern electronic digital stored-program computer was the Manchester Baby, which ran its first program on 21 June 1948. Electronic computers, using either relays or valves, began to appear in the early 1940s. The electromechanical Zuse Z3, completed in 1941, was the world's first programmable computer, and by modern standards one of the first machines that could be considered a complete computing machine. Colossus, developed during the Second World War to decrypt German messages, was the first electronic digital computer. Although it was programmable, it was not general-purpose, being designed to perform only a single task. It also lacked the ability to store its program in memory; programming.
        </p>
    `,
    image: singleServiceImage
}

const SingleService = () => {
    return (
        <>
            {/* Page Banner section  */}
            <BannerTwo pageTitle="Service Details" title="Digital Consultancy" />

            {/* Single Service Details section  */}
            <SingleServiceContent singleDetails={service} />

            {/* Platform section  */}
            <Platform />

            {/* Grid Image section  */}
            <ImageGrid images={gridImages} />

            {/* Pricing Section  */}
            <Pricing />

            {/* Call To Action Section  */}
            <CallToActionThree />

        </>
    );
};

export default SingleService;