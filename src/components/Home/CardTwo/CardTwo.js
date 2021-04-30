import React from 'react'
import Fade from 'react-reveal/Fade';
import './CardTwo.css'

import img2 from '../../../assets/img2.jpg'

function CardTwo() {
    return (
        <div className="cardTwo">
            <Fade left>
                <div className="cardTwoDiv">
                    <h1>Card Two Heading Here.. hihihi hihihi</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                </div>
            </Fade>
            <Fade right>
                <div className="cardTwoImage">
                    <img src={img2} alt="" />
                </div>
            </Fade>
        </div>
    )
}

export default CardTwo
