import React from 'react'
import './header.css';

import heroanim60fpsmobile from '../../assets/HeroAnim60fpsmobile.mp4'
import heroanim60fps from '../../assets/Hero_Anim60fps.mp4'
import arrowdiago from '../../assets/arrowdiago.svg'

const Header = () => {
  return (
    <div className="oraj__header section__padding" id="home">
        <div className="oraj__header-content">



            <h1 className="upper__text">We build digital experiences</h1>
            <div className="oraj__header-content_maintext">
              <h2>Oraj Studio</h2> <div className="straight-bar"></div> <h3>Montreal based creative</h3>
          </div>

          <video loop autoPlay playsInline="true" disablePictureInPicture="true" muted autobuffer className="oraj__header-video_mobile">
          <source src={heroanim60fpsmobile} type="video/mp4" />
          
           </video>

            <div className="oraj__header-content__buttons">
            <div className="ourwork"><button type="button"><h4>Our Work</h4></button></div>
            <div className="idea"><button type="button"><h5>Have an idea?</h5><img src={arrowdiago} alt="arrowdiago" /></button></div>
            </div>


        </div>



        <div className="oraj__header-video">
          <video className="oraj__header-video" loop autoPlay playsInline muted autobuffer>
          <source src={heroanim60fps} type="video/mp4" /> </video>
  </div>
    </div>

    
  )
}

export default Header