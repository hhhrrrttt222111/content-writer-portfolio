import React from 'react'
import Fade from 'react-reveal/Fade';

import './CardThree.css'

import img3 from '../../../assets/img3.jpg'

function CardThree() {
    return (
        <div className="cardThree">
            <Fade left>
                <div className="cardThreeImage">
                    <img src={img3} alt="" />
                </div>
            </Fade>
            <Fade right>
                <div className="cardThreeDiv">
                    <h1>Card Three Heading Here.. hihihi hihihi</h1>
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

export default CardThree
