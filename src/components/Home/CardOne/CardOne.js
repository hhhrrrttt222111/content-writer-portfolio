import React from 'react'
import Fade from 'react-reveal/Fade';

import './CardOne.css'

import img1 from '../../../assets/img1.jpeg'

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
                    <h1>Hey there</h1>
                    <p>
                    Have a brilliant idea in your brain that has the potential to blow minds? <br/>
                    Have you designed a website and are in desperate need of the words to market it?
                    </p>
                </div>
            </Fade>
        </div>
    )
}

export default CardOne
