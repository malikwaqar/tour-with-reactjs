import React from 'react';
import './Hero.css';
import '../../App.css';
import { Button } from '../Button/Button';

function Hero() {
    return (
        <div className="hero">
            {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero__buttons">
                <Button className="btn"
                buttonStyle="btn__outline"
                buttonSize = "btn__large"
                >
                    GET STARTED
                </Button>
                <Button className="btn"
                buttonStyle="btn__primary"
                buttonSize = "btn__large"
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default Hero;
