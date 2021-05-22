import React from 'react'
import {Link} from "react-router-dom";

import { AiOutlineMedium } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";

import './Footer.css'
import footerimg from '../../assets/svg/footerImg.svg'

function Footer() {

    var year=new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="container">

                <div className="grid-container">
                    <div className="grid-item grid-one">
                        <img src={footerimg} alt="Anjali Rajendran" className="logo-img"/>
                    </div>

                    <div className="grid-item inner-grid-container">  
                        <div className="grid-item"><Link to='/about'>About</Link></div>    
                        <div className="grid-item"><Link to='/blog'>Blog</Link></div>   
                        <div className="grid-item"><Link to="/services">Services</Link></div>   
                        <div className="grid-item"><Link to='/contact'>Contact</Link></div>   
                    </div>

                    <div className="grid-icon">
                        <div className="social-buttons">
                            <a href="https://medium.com/@anjaliraj2804" target="_blank" rel="noreferrer" className="circle-icon">
                              <AiOutlineMedium/> 
                            </a>
                            <a href="https://www.instagram.com/_anjali__rajendran_/" target="_blank" rel="noreferrer" className="circle-icon">
                               <FiInstagram/> 
                            </a>
                            <a href="https://www.linkedin.com/in/anjali-rajendran28/" target="_blank" rel="noreferrer" className="circle-icon">
                               <FaLinkedinIn/> 
                            </a>
                            <a href="https://twitter.com/Anjaliiii10" target="_blank" rel="noreferrer" className="circle-icon">
                                <FaTwitter/>
                            </a>
                        </div>
                    </div>   
                </div>
                <hr />
                <p>Copyright © {year} | Anjali Rajendran</p>
            </div>
        </footer>
    )
}

export default Footer
