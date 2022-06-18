import React from 'react'
import './header.css';

import heroanim60fpsmobile from '../../assets/HeroAnim60fpsmobile.mp4'
import heroanim60fps from '../../assets/Hero_Anim60fps.mp4'
import arrowdiago from '../../assets/arrowdiago.svg'
import Back2 from '../../assets/back2.mp4'

const Header = () => {
  return (
    <div className="oraj__header section__padding" id="home">
        <div className="oraj__header-content">

        <video loop autoPlay playsinline="true" disablePictureInPicture="true" muted autobuffer className="Back2"
style={{
  position: "absolute",
  width: "100%",
  left: "50%",
  top: "50%",
  height: "35%",
  objectFit: "cover",
  transform: "translate(-50%, -50%)",
  zIndex: "-999",
}}
>
<source src={Back2} type="video/mp4"/>

</video>


            <h1 className="upper__text">We build digital experiences</h1>
            <div className="oraj__header-content_maintext">
              <h2>Oraj Studio</h2> <div className="straight-bar"></div> <h3>Montreal based creative</h3>
          </div>

          <video loop autoPlay playsinline="true" disablePictureInPicture="true" muted autobuffer className="oraj__header-video_mobile"

          style={{
  position: "relative",
  width: "100%",
  height: "35%",
  objectFit: "cover",
  zIndex: "-999",
}}>
          <source src={heroanim60fpsmobile} type="video/mp4" />
          
           </video>

            <div className="oraj__header-content__buttons">
            <div className="ourwork"><button type="button"><h4>Our Work</h4></button></div>
            <div className="idea"><button type="button"><h5>Have an idea?</h5><img src={arrowdiago} alt="arrowdiago" /></button></div>
            </div>


        </div>



        <div className="oraj__header-video">
          <video className="oraj__header-video" loop autoPlay playsInLine muted autoBuffer>
          <source src={heroanim60fps} type="video/mp4" /> </video>
  </div>
    </div>

    
  )
}

export default Header