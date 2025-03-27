import React, { useContext } from "react";
import './NotFound.css'
import { Link } from "react-router";
import themeContext from "../../contextAPI/contexts/themeContext";
const NotFound = () => {
    const { isDark } = useContext(themeContext)
    return (
        <div className="errorDiv">
            <h1 style={{ color: !isDark ? '#e50914' : 'white' }} >
                404 Error!
            </h1>
            <h1 style={{ color: !isDark ? '#e50914' : 'white' }} >
                Page Not Found
            </h1>
            <button className="err-btn">
                <Link to='/'>
                    <b style={{ color: !isDark ? '#e50914' : 'white' }}>
                        Go to Home Page
                    </b>
                </Link>
            </button>

        </div>
    );
};

export default NotFound;
