import React from 'react'
import { IoLogoCss3 } from "react-icons/io";
import { FaPenNib, FaHtml5 } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { BiGlobeAlt } from "react-icons/bi";
import { SiWordpress } from "react-icons/si";
import SkillCard from './SkillCard/SkillCard'
import SkillProgress from './SkillProgress/SkillProgress'

import './Skills.css'


function Skills() {

    return (
        <div className="skills">
            <div className="skillsContainer">
                <h2>Skills</h2>
                <div className="skillsCardContainer">
                    <div className="skillsCardOne">
                        <SkillCard value={95} name="Writing" Icon={FaPenNib}/>
                        <SkillCard value={90} name="Marketing" Icon={BiGlobeAlt}/>
                        <SkillCard value={75} name="Wordpress" Icon={SiWordpress}/>
                    </div>
                    <div className="skillsCardTwo">
                        <SkillCard value={88} name="HTML" Icon={FaHtml5}/>
                        <SkillCard value={80} name="CSS" Icon={IoLogoCss3}/>
                        <SkillCard value={66} name="JS" Icon={DiJavascript1}/>
                    </div>
                    <div className="skillsCardThree">
                        <SkillProgress value={80} name="Java"/>
                        <SkillProgress value={70} name="C/C++"/>
                        <SkillProgress value={65} name="Python"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
