import React from 'react'
import { Button } from '@material-ui/core'
import './Landing.css'

import img1 from '../../../assets/img1.jpeg'


function Landing() {
    return (
        <div className="landing">
            <div className="img-overlay"></div>
            <div className="landing_container">
                <div className="landing_text">
                    <h1 className="fadeIn">Just another misfit pretending to be your standard girl next door. <br /><br />Probably bingeing on another TV series.</h1>
                    <Button className="fadeIn">Download Resume</Button>
                </div>
                <div className="landing_img">
                    <img src={img1} alt="Anjali Rajendran"/>
                </div>
            </div>

        </div>
    )
}

export default Landing
