import React from 'react';
import { Link } from 'react-router-dom';

const MoveTop = () => {

    const handleButtonClicked = () => {
        window.scrollTo(0, 0);
    }

    // const [sticky, setSticky] = useState('');
    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if (Math.ceil(window.scrollY) >= 200) {
    //             setSticky('sticky')
    //         } else {
    //             setSticky('')
    //         }
    //     });
    // }, []);

    // function scrollTop() {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth',
    //     })
    // }

    // return (
    //     <div className={sticky}>
    //         <div className="up_btn up_btn1" onClick={() => scrollTop()}><FontAwesome name="angle-double-up" /></div>
    //     </div>
    // );

    return (
        <Link onClick={handleButtonClicked} to="/" id="back-to-top" style={{ opacity: '1', visibility: 'visible' }}>
            <i className="fa fa-angle-up"></i>
            <h1>sdfsd</h1>
        </Link>
    );
};

export default MoveTop;