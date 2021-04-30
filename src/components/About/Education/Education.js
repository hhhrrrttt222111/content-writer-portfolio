import React from 'react'

import { GiSchoolBag } from "react-icons/gi";
import { MdSchool } from "react-icons/md";

import EduCard from './EduCard/EduCard'
import './Education.css'

import eduImg from '../../../assets/png/eduImg.png'

function Education() {
    return (
        <div className="education">
            <div className="educationContainer">
                <h2>Education</h2>
                <div className="edu_card_container">
                    <EduCard 
                        year="2014 - 2015" 
                        Icon={GiSchoolBag} 
                        title="Bachelor of Science in Computer Science" 
                        subtitle="Cambridge University" 
                        desc="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    />
                    <EduCard 
                        year="2014 - 2015" 
                        Icon={MdSchool} 
                        title="Bachelor of Science in Computer Science" 
                        subtitle="Cambridge University" 
                        desc="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    />
                    <EduCard 
                        year="2014 - 2015" 
                        Icon={MdSchool}
                        title="Bachelor of Science in Computer Science" 
                        subtitle="Cambridge University" 
                        desc="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    />

                </div>
            </div>
            <img src={eduImg} alt="" />
        </div>
    )
}

export default Education
