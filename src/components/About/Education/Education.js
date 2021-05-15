import React from 'react'

import { GiSchoolBag } from "react-icons/gi";
import { MdSchool } from "react-icons/md";

import EduCard from './EduCard/EduCard'
import './Education.css'

import eduImg from '../../../assets/png/hp.png'

function Education() {
    return (
        <div className="education">
            <div className="educationContainer">
                <h2>Education</h2>
                <div className="edu_card_container">
                    <EduCard 
                        year="2005 - 2017" 
                        Icon={GiSchoolBag} 
                        title="Primary and Secondary Education" 
                        subtitle="Sharjah Indian School, Sharjah, UAE" 
                        desc="I spent the formative years of my childhood in this wondrous place. Much of what I have grown up to be, I owe to this remarkable institution and its teachers."
                    />
                    <EduCard 
                        year="2017 - 2019" 
                        Icon={MdSchool} 
                        title="Higher Secondary Education" 
                        subtitle="Chavara CMI Public School, Pala, Kerala" 
                        desc="I did not realise how quickly time passed in this school because of all the chaotic preparation to crack the engineering entrance examinations. Two years spent doing nothing but chasing the dream that every engineering aspirant child has."
                    />
                    <EduCard 
                        year="2019 - Present" 
                        Icon={MdSchool}
                        title="Bachelor Degree in Computer Science" 
                        subtitle="Model Engineering College, Thrikkakara, Ernakulam" 
                        desc="Joined here after cracking the engineering entrance, with a lot of expectations for the future. Currently having the time of my life here, meeting people like me and finding new interests."
                    />

                </div>
            </div>
            <img src={eduImg} alt="" />
        </div>
    )
}

export default Education

