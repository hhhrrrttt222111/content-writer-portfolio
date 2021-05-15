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
                    <h1>Well here's your solution.</h1>
                    <p>
                    Me!<br/>
                    Now you can sit back and relax, for you have reached the perfect place. I can help you tell your story to the world.
                    </p>
                </div>
            </Fade>
        </div>
    )
}

export default CardThree
