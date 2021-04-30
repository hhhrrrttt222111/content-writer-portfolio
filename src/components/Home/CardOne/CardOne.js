import React from 'react'
import Fade from 'react-reveal/Fade';

import './CardOne.css'

import img1 from '../../../assets/img1.jpg'

function CardOne() {
    return (
        <div className="cardOne">
            <Fade left>
                <div className="cardOneImage">
                    <img src={img1} alt="" />
                </div>
            </Fade>
            <Fade right>
                <div className="cardOneDiv">
                    <h1>Card One Heading Here.. hihihi hihihi</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                </div>
            </Fade>
        </div>
    )
}

export default CardOne
