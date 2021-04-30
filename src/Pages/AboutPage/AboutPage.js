import React from 'react'

import { Education, AboutMe } from '../../components'
import './AboutPage.css'

function AboutPage() {
    return (
        <div className="aboutPage">
            <AboutMe />
            <Education />
        </div>
    )
}

export default AboutPage
