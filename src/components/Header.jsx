import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">UMS</Link>
            </div>
            <ul>
                <>
                    <li>
                        <Link to="/semester">Semester</Link>
                    </li>
                    <li>
                        <Link to="/courselist">Add Course</Link>
                    </li>
                </>
            </ul>
        </header>
    );
};

export default Header;
