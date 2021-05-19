import React from 'react'
import Fade from 'react-reveal/Fade';
import './CardTwo.css'

import img2 from '../../../assets/img2.jpeg'

function CardTwo() {
    return (
        <div className="cardTwo">
            <Fade left>
                <div className="cardTwoDiv">
                    <h1>What's on your mind</h1>
                    <p>
                    Have you designed a product and want it to sell out as soon as it hits the shelves?<br/>
                    Holding back only because you don’t know how to put it into words?
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
