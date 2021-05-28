import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <aside className="widget widget-categories">
            <h3 className="widget-title"><span>Categories</span></h3>
            <ul>
                <li><Link to="/">Business</Link><span>26</span></li>
                <li><Link to="/">Consultant</Link><span>30</span></li>
                <li><Link to="/">Creative</Link><span>71</span></li>
                <li><Link to="/">UI/UX</Link><span>56</span></li>
                <li><Link to="/">Technology</Link><span>60</span></li>
            </ul>
        </aside>
    );
};

export default Category;