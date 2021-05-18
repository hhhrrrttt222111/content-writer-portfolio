import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

import './Testimonials.css'

import testimonial from '../../../assets/png/testimonial.png'
import gear from '../../../assets/svg/gear.svg'

import test1 from '../../../assets/testimonials/test1.jpeg'


const testimonials = [
    {
        'id': 1,
        'name': 'Hemanth R',
        'title': 'Frontend Developer',
        'text': 'Anjali is great! Easy to work with and is always professional. Her content is top notch and I would recommend her without any hesitation.',
        'image': test1
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
                                <Avatar className="sliderImg" src={slide.image} />
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
