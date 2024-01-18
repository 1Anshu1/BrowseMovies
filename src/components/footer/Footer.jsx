import React from 'react'
import './style.scss'
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from '../contentWrapper/ContentWrapper'

const Footer = () => {
    return (
        <div className='footer'>
            <ContentWrapper>
                <ul className="footer-items">
                    <li className="footer-item">Terms Of Use</li>
                    <li className="footer-item">Privacy-Policy</li>
                    <li className="footer-item">About</li>
                    <li className="footer-item">Blog</li>
                    <li className="footer-item">FAQ</li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ducimus sequi debitis reprehenderit similique maiores ut, itaque vel ipsum amet magni minus, ipsa tempore? Voluptatibus nostrum voluptate numquam cumque! Et porro ut aliquid vitae tempore rerum odio labore, dolor repellendus illo beatae quos maiores. Incidunt odit facilis adipisci quidem iste?</p>
                <div className="social-icons">
                    <div className="social-icon"><FaFacebookF /></div>
                    <div className="social-icon"><FaInstagram /></div>
                    <div className="social-icon"><FaLinkedin /></div>
                    <div className="social-icon"><FaTwitter /></div>
                </div>
            </ContentWrapper>

        </div>
    )
}

export default Footer
