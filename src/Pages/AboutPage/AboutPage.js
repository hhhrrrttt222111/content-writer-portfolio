import React from 'react'
import { Helmet } from "react-helmet";

import { Education, AboutMe, Skills, Navbar } from '../../components'
import './AboutPage.css'

function AboutPage() {
    return (
        <>
            <Helmet>
                <title>About Me</title>
            </Helmet>

            <Navbar home={false}/>
            <AboutMe />
            <Education />
            <Skills />
        </>
    )
}

export default AboutPage
