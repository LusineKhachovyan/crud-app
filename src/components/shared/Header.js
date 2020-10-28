import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src="/images/logo.jpg" alt="Logo" />
                </div>
                <nav>
                    <ul className="menu">
                        <li>
                            <NavLink to="/" exact>
                                Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/homes" exact>
                                Homes
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
