import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

import './Testimonials.css'

import testimonial from '../../../assets/png/testimonial.png'
import gear from '../../../assets/svg/gear.svg'

const imgSrc="https://media.onesignal.com/cms/_363xAUTO_crop_center-center_none/sms_2020-12-02-231422.png?mtime=20201202151422&focal=none&tmtime=20210322204235"
const testimonials = [
    {
        'id': 1,
        'name': 'John wick',
        'title': 'You know it',
        'text': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia 11',
        'image': 'imgSrc'
    },
    {
        'id': 2,
        'name': 'VK',
        'title': 'HRT',
        'text': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia 222 ',
        'image': 'imgSrc'
    },
    {
        'id': 3,
        'name': 'ABD',
        'title': 'HRT',
        'text': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia 333',
        'image': 'imgSrc'
    }
]

function Testimonials() {


    const [current, setCurrent] = useState(0);

    const length = 3;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };
      

    return (
        <div className="testimonials">
            <h1>Testimonials</h1>
            <div className="testContainer">
                <img src={testimonial} alt="" />
                <div className="sliderButtons">
                    <BsCaretLeft className='left-arrow' onClick={prevSlide} />
                    <BsCaretRight className='right-arrow' onClick={nextSlide} />
                </div>
                <div className="sliderCards">
                    {testimonials.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} >
                            {index === current && (
                            <>
                                <Avatar className="sliderImg" src={imgSrc} />
                                <FormatQuoteIcon className="quote_icon"/>
                                <div className="slider">
                                    <h2>{slide.text}</h2>
                                    <h3>{slide.name}</h3>
                                    <p>{slide.title}</p>
                                </div>
                            </>
                            )}
                        </div>
                        );
                    })}
                </div>
            </div> 
            <img src={gear} alt="" className="rotating"/>
        </div>
    )
}

export default Testimonials
