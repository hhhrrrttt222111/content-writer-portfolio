import React from 'react'

import { Education, AboutMe, Skills, Navbar } from '../../components'
import './AboutPage.css'

function AboutPage() {
    return (
        <div className="aboutPage">
            <Navbar home={false}/>
            <AboutMe />
            <Education />
            <Skills />
        </div>
    )
}

export default AboutPage
