import React from "react";
import './NotFound.css'
import { Link } from "react-router";
const NotFound = () => {
    return (
        <div className="errorDiv">
            <h1>
                404 Error!
            </h1>
            <h1>
                Page Not Found
            </h1>
            <button className="err-btn">
                <Link to='/'>
                    Go to Home Page
                </Link>
            </button>

        </div>
    );
};

export default NotFound;
