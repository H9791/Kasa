import { useState } from 'react';
import './gallery.css';
import arrowleft from './arrowleft.svg';
import arrowright from './arrowright.svg';
export default function Gallery({ slides }) {

    const [slideNumber, setSlideNumber] = useState(0);

    const handleClickLeft = () => {
        //get slide number and then set it
        if (slideNumber === 0) {
            setSlideNumber(slides.length - 1);
        } else {
            setSlideNumber(slideNumber - 1);
        }
    }

    const handleClickRight = () => {
        if (slideNumber === slides.length - 1) {
            setSlideNumber(0);
        } else {
            setSlideNumber(slideNumber + 1);
        }
    }

    return (
            <div id="carousel">
                {slides.length>1?(
                <div className="arrows">
                    <img className="arrow-left" src={arrowleft} onClick={handleClickLeft} alt="Arrow left"/>
                    <div className="slide-number">{slideNumber+1}/{slides.length}</div>
                    <img className="arrow-right" src={arrowright} onClick={handleClickRight} alt="Arrow right" />
                </div>):null}
                <img className="carousel-image" src={slides[slideNumber]} alt="Gallery" />
            </div>
    );
}