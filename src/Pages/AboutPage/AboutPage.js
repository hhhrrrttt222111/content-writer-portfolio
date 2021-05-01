import React from 'react'

import { Education, AboutMe, Skills } from '../../components'
import './AboutPage.css'

function AboutPage() {
    return (
        <div className="aboutPage">
            <AboutMe />
            <Education />
            <Skills />
        </div>
    )
}

export default AboutPage
