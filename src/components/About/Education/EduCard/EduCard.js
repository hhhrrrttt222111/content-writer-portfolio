import React from 'react'
import { Avatar } from '@material-ui/core';
import Fade from 'react-reveal/Fade';

import './EduCard.css'

function EduCard({ year, Icon, title, subtitle, desc }) {
    return (
        <Fade bottom>
            <div className="eduCard">
                <div className="eduCardIcon">
                    <Avatar style={{backgroundColor: '#990099'}}>
                        <Icon />
                    </Avatar>
                </div>
                <div className="eduCardBody">
                    <span>{year}</span>
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        </Fade>
    )
}

export default EduCard
