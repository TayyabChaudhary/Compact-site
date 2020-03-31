import React from 'react';
import '../All-Sections-Scss/Section1-Scss/section1.scss';
import Logo from '../../Assects/All-Images/Logo_images/logo.png'
export default function Section1() {
    return (
        <div>
            <nav className="navigation">
                <div className="logo">
                    <img src={Logo} />
                    <div className="navbar-links">
                        <ul>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Services</a>
                            </li>
                            <li>
                                <a href="">Product</a>
                            </li>
                            <li>
                                <a href="">Protfolio</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                            <li>
                                <a href="">Login</a>
                            </li>
                            <li>
                                <button>SignUp</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
