import React from 'react'

import './Footer.css'
import { AiOutlineMedium } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import {Link} from "react-router-dom";

import img from '../../assets/img5.jpg'


function Footer() {
    return (
        <footer className = "site-footer">
            <div class = "container">

                <div class="grid-container">
                    <div class="grid-item">
                        
                        <img src = {img} class = "logo-img" />

                    </div>

                    <div class="grid-item inner-grid-container">
                        
                        <div class="grid-item">
                            <Link to = '/about'>About</Link>
                        </div>    
                        
                        <div class="grid-item"><Link to = '/blog'>Blog</Link></div>   
                        <div class="grid-item"><Link to = '/contact'>Contacts</Link></div>   
                        <div class="grid-item"><Link to = "/services">Services</Link></div>   


                    </div>

                    <div class="grid-icon">
                        <div class = "social-buttons">
                            <a href= " " className="circle-icon">
                              <AiOutlineMedium/> 
                            </a>
                            <a href= "https://www.instagram.com/_anjali__rajendran_/" className="circle-icon">
                               <FiInstagram/> 
                            </a>
                            <a href= "https://www.linkedin.com/in/anjali-rajendran28/" className="circle-icon">
                               <FaLinkedinIn/> 
                            </a>
                            <a href= "" className="circle-icon">
                                <FaTwitter/>
                            </a>
                        </div>
                    </div>   
                </div>
                <hr />

                <p>Copyright © 2021 | Anjali Rajendran</p>

                </div>
        </footer>
    )
}

export default Footer
