import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './SnippetCard.css'
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

function SnippetCard() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        margin: 10,
        loop: true,
        autoplaySpeed: 8000,
        nextArrow: <RiArrowRightSLine />,
        prevArrow: <RiArrowLeftSLine />,
    };

    return (
        <div style={{height: '95%'}} className="snippetCard">
            <Slider {...settings}>
                <div className="snipCardContainer">
                    <div className="snipCardContent">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. 
                            
                        </p>
                    </div>
                </div>

                <div className="snipCardContainer">
                    <div className="snipCardContent">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. 
                        </p>
                    </div>
                </div>

                <div className="snipCardContainer">
                    <div className="snipCardContent">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. 
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default SnippetCard
