import React from 'react';
import { Route } from 'react-router-dom';
import FooterOne from '../../components/Footers/FooterOne/FooterOne';
import HeaderOne from '../../components/Headers/HeaderOne/HeaderOne';

const ThemeRoute = ({ children, theme, ...rest }) => {
    return (
        <div className={theme}>
            {
                theme === 'theme-1' &&
                <>
                    <HeaderOne />
                </>
            }
            <Route
                {...rest}
                render={() => (
                    children
                )}
            />

            {
                theme === 'theme-1' &&
                <>
                    <FooterOne />
                </>
            }
        </div>

    );
};

export default ThemeRoute;