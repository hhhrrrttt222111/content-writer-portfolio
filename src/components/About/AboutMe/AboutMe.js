import React from 'react'

import './AboutMe.css'

import about1 from '../../../assets/svg/about1.svg'
import aboutBg from '../../../assets/svg/aboutBg.svg'

function AboutMe() {
    return (
        <div className="aboutMe">
            <img src={aboutBg} alt="" className="aboutBg"/>
            <div className="aboutContainer">
                <h1>Ye, bro.</h1>
                <h3>A small river named Duden flows by their place and supplies it with the necessary regelialia.</h3>
                <div className="aboutBody">
                    <p>
                        The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. 
                        Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he 
                        is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance 
                        and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when 
                        I lay My vengeance upon thee. <br /><br />
                        Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into 
                        a glass mf' house, fyckin' up the way the nigger talks. Do that shit to me, he better paralyze my ass, 
                        'cause I'll kill the ..., know what I'm sayin'? <br /><br />
                        Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can 
                        tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you 
                        and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.
                    </p>

                    <img src={about1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutMe
