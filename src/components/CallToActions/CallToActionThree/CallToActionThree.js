import { Link } from 'react-router-dom';
import paginationImage from '../../../assets/images/service-details/pagination-bg.jpg';

const CallToActionThree = () => {
    return (
        <section className="pagination-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p>
                            Electronic computers, using either relays or valves, began to appear in the early 1940s. The electromechanical Zuse Z3, completed in 1941, was the world's first programmable computer, and by modern standards one of the first machines that could be considered a complete computing machine. Colossus, developed during the Second World War to decrypt German messages, was the first electronic digital computer. Although it was programmable, it was not general-purpose, being designed to perform only a single task. It also lacked the ability to store its program in memory; programming was carried out using plugs and switches to alter the internal wiring.[10] The first recognisably modern electronic digital stored-program computer was the Manchester Baby, which ran its first program on 21 June 1948. Electronic computers, using either relays or valves, began to appear in the early 1940s. The electromechanical Zuse Z3, completed in 1941, was the world's first programmable computer, and by modern standards one of the first machines that could be considered a complete computing machine. Colossus, developed during the Second World War to decrypt German messages, was the first electronic digital computer. Although it was programmable, it was not general-purpose, being designed to perform only a single task. It also lacked the ability to store its program in memory; programming.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="service-pagi">
                            <div className="previous">
                                <Link to="/">Prev Service</Link>
                                <h3>Digital Agency</h3>
                            </div>
                            <div className="next" style={{ backgroundImage: `${paginationImage}` }}>
                                <Link to="/">Next Service</Link>
                                <h3>UIX Designing</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToActionThree;