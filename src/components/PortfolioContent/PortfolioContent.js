import { Link } from "react-router-dom";
import CallToActionThree from "../CallToActions/CallToActionThree/CallToActionThree";
import gridImageOne from '../../assets/images/portfolio-details/2.jpg';
import gridImageTwo from '../../assets/images/portfolio-details/3.jpg';
import ImageGridTwoColumn from "../ImageGrid/ImageGridTwoColumn";

const images = [gridImageOne, gridImageTwo];

const PortfolioContent = ({ portfolio }) => {
    return (
        <section className="single-folio-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="folio-area">
                            <div className="folio-thumb">
                                <img src={portfolio.featureImg} alt="" />
                            </div>
                            <div className="folio-content">
                                <div className="fs-item">
                                    <h5>Project Name</h5>
                                    <p>{portfolio.projectName}</p>
                                </div>
                                <div className="fs-item">
                                    <h5>Client Name</h5>
                                    <p>{portfolio.clientName}</p>
                                </div>
                                <div className="fs-item">
                                    <h5>Date</h5>
                                    <p>{portfolio.date}</p>
                                </div>
                                <div className="fs-item">
                                    <h5>Tag</h5>
                                    <p>
                                        {
                                            portfolio.tag?.map((SinglePortfolio, index) => <Link key={index} to="/">{SinglePortfolio}, </Link>)
                                        }
                                    </p>
                                </div>
                                <div className="fs-item">
                                    <Link className="folio-more" to="/"><i className="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            <p>
                                Humans have been storing, retrieving, manipulating, and communicating information since the Sumerians in Mesopotamia developed writing in about 3000 BC,[3] but the term information technology in its modern sense first appeared in a 1958 article published in the Harvard Business Review; authors Harold J. Leavitt and Thomas L. Whisler commented that "the new technology does not yet have a single established name. We shall call it information technology (IT)." Their definition consists of three categories: techniques for processing, the application of statistical and mathematical methods to decision-making, and the simulation of higher-order thinking through computer programs.
                            </p>
                            <p>
                                Electronic computers, using either relays or valves, began to appear in the early 1940s. The electromechanical Zuse Z3, completed in 1941, was the world's first programmable computer, and by modern standards one of the first machines that could be considered a complete computing machine. Colossus, developed during the Second World War to decrypt German messages, was the first electronic digital computer. Although it was programmable, it was not general-purpose, being designed to perform only a single task. It also lacked the ability to store its program in memory; programming was carried out using plugs and switches to alter the internal wiring.[10] The first recognisably modern electronic digital stored-program computer was the Manchester Baby, which ran its first program on 21 June 1948. Electronic computers, using either relays or valves, began to appear in the early 1940s. The electromechanical Zuse Z3, completed in 1941, was the world's first programmable computer, and by modern standards one of the first machines that could be considered a complete computing machine. Colossus, developed during the Second World War to decrypt German messages, was the first electronic digital computer. Although it was programmable, it was not general-purpose, being designed to perform only a single task. It also lacked the ability to store its program in memory; programming.
                            </p>

                            <ImageGridTwoColumn images={images} />

                            <p>
                                Humans have been storing, retrieving, manipulating, and communicating information since the Sumerians in Mesopotamia developed writing in about 3000 BC,[3] but the term information technology in its modern sense first appeared in a 1958 article published in the Harvard Business Review; authors Harold J. Leavitt and Thomas L. Whisler commented that "the new technology does not yet have a single established name. We shall call it information technology (IT)." Their definition consists of three categories: techniques for processing, the application of statistical and mathematical methods to decision-making, and the simulation of higher-order thinking through computer programs.
                            </p>

                            <CallToActionThree />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioContent;