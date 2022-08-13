import React from 'react';
import Slider from 'react-slick';
import slider01 from '../../../Images/slider/slider-01.jpg';
import slider02 from '../../../Images/slider/slider-02.jpg';
import slider03 from '../../../Images/slider/slider-03.jpg';
import slider04 from '../../../Images/slider/slider-04.jpg';

const AboutSlider = () => {

    const settings = {
        dots: true,
        className: "center ",
        centerMode: true,
        centerPadding: "60px",
        variableWidth: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",

    }
    return (
        <div>

            <Slider {...settings}>
                <div>

                    <img src={slider01} alt="" />
                </div>
                <div>

                    <img src={slider02} alt="" />
                </div>
                <div>

                    <img src={slider03} alt="" />
                </div>
                <div>

                    <img src={slider04} alt="" />
                </div>

            </Slider>
        </div>
    );
};

export default AboutSlider;