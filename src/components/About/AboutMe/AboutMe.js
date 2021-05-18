import React from 'react'

import './AboutMe.css'

import about1 from '../../../assets/png/about1.png'
import aboutBg from '../../../assets/svg/aboutBg.svg'

function AboutMe() {
    return (
        <div className="aboutMe">
            <img src={aboutBg} alt="" className="aboutBg"/>
            <div className="aboutContainer">
                <h1>Hey, folks!</h1>
                <h3>Anjali here.</h3>
                <div className="aboutBody">
                    <p>
                        I am a second-year computer science and engineering student with a passion for writing. A firm believer in the simulation theory, storytelling has always come easy to me, not once having trouble stringing together words appealingly. I first discovered that I have a knack for writing catchy slogans and product pitches when I was asked to write the broadcast content for a college-organized event, which became a huge success. That was when I realized that I take delight in putting others’ brilliant ideas into words and awing the audience. I normally while away my time reading books(it is to this habit that I owe my passion for writing to) or watching movies of all genres, so that’s what I'm probably doing right now. Oh and this is probably a great time to mention that I am the biggest Potterhead I know and that you shouldn’t mention Harry Potter to me unless you want me to talk your ear off. I love listening to music and play a little piano myself. I take great pleasure in solving puzzles, brain teasers and crosswords and also love learning new things, which is why I love coding.  <br /><br />
                        Enough said about me, now tell me your story and your ideas so I can help you tell it to the world.<br/>
                        Do check out my work and contact me if it piques your interest!<br/>
                        Thanks for stopping by!
                    </p>

                    <img src={about1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutMe
