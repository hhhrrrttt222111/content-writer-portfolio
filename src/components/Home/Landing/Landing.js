import React from 'react'
import { Button } from '@material-ui/core'
import './Landing.css'

import img4 from '../../../assets/img4.jpeg'
import anjaliPdf from '../../../assets/anjaliPdf.pdf'

function Landing() {
    return (
        <div className="landing">
            <div className="img-overlay"></div>
            <div className="landing_container">
                <div className="landing_text">
                    <h1 className="fadeIn">
                        Just another misfit pretending to be your standard girl next door. <br /><br />Probably bingeing on another TV series.
                    </h1>
                    <a href={anjaliPdf} download="Anjali_Rajendran_CV">
                        <Button className="fadeIn">
                            Download Resume
                        </Button>
                    </a>
                </div>
                <div className="landing_img">
                    <div className="frame">
                    <img src={img4} alt="Anjali Rajendran"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Landing
