import React from 'react'

import './Landing.css'

function Landing() {
    return (
        <div className="landing">
            <div className="img-overlay"></div>
            <div className="landing_text">
                {/* <h1 className="fadeIn">Loremmm..</h1>
                <h1 className="fadeIn">Sample Text description here</h1>
                <h1 className="fadeIn">Text here tooo</h1> */}
                <h1 className="home-title">
                    <span>Sample Text description here </span>
                    <span>Sample Text description here</span>
                </h1>
            </div>
        </div>
    )
}

export default Landing
