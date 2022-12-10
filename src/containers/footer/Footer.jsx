import React from 'react'
import orajlogoo from '../../assets/orajlogo-o.svg'
import './footer.css';
import behance from '../../assets/socials/white/behance.svg'
import tiktok from '../../assets/socials/white/tik-tok.svg'
import linkedin from '../../assets/socials/white/linkedin.svg'
import instagram from '../../assets/socials/white/instagram.svg'
import twitter from '../../assets/socials/white/twitter.svg'



const Footer = () => {
  return (
    <div>
      <div className="oraj__footer" id="footer">
        <div className="oraj__footer section__padding">
          <div className="oraj__footer-content">

            <div className="oraj__footer-content_upperpart">
            <a href="/"><div className="oraj__footer-content_logo"><img src={orajlogoo} alt={orajlogoo} /></div></a><div className="oraj__footer-content_email"><h1><a href="mailto:odifycreative@gmail.com">odifycreative@gmail.com</a></h1></div>
            </div>

            <div className="oraj__footer-content_middletext">
                <div className="oraj__footer-content_weareoraj">
                  <button className="oraj__footer-content_button"><h1>We are Odify.</h1></button></div>
                  <div className="oraj__footer-content_resttext"><h1>Creativity, originality, out of the ordinary.<br></br>We break standards.</h1></div>
                
            </div>

            <div className="oraj__footer-content_middletextmob">
                <div className="oraj__footer-content_weareoraj">
                  <div className="oraj__footer-content_button"><h1>We are Odify.</h1></div></div>
                  <div className="oraj__footer-content_resttext"><h1>Creative and unique.<br></br>We break standards.</h1></div>
                
            </div>

            <div className="oraj__footer-content_lowerpart">
              <h1>©Odify Creative 2022</h1>
              
              <div className="oraj__footer-content_socials">
              <div className="oraj__footer-content_link">
                  <a href="https://www.behance.net/odifycreative" target="_blank" rel="noreferrer"><img src={behance} alt={behance} /></a></div>
                  <div className="oraj__footer-content_link">
                  <a href="https://www.tiktok.com/@odify.creative" target="_blank" rel="noreferrer"><img src={tiktok} alt={tiktok} /></a></div>
                  <div className="oraj__footer-content_link">
                  <a href="https://www.linkedin.com/company/odify-creative/" target="_blank" rel="noreferrer"><img src={linkedin} alt={linkedin} /></a></div>
                  <div className="oraj__footer-content_link">
                  <a href="https://www.instagram.com/odify.creative/" target="_blank" rel="noreferrer"><img src={instagram} alt={instagram} /></a></div>
                  <div className="oraj__footer-content_link">
                  <a href="https://twitter.com/OdifyCreative" target="_blank" rel="noreferrer"><img src={twitter} alt={twitter} /></a></div>

                  </div></div>

            <div className="oraj__footer-content_socialsmobcont">
            <h1>©Odify Creative 2022</h1>
            <div className="oraj__footer-content_socialsmob1">
              

                <div className="oraj__footer-content_link">
                  <a href="https://www.behance.net/odifycreative" target="_blank" rel="noreferrer"><img src={behance} alt={behance} /></a></div>
                  <div className="oraj__footer-content_link">
                  <a href="https://www.tiktok.com/@odify.creative" target="_blank" rel="noreferrer"><img src={tiktok} alt={tiktok} /></a></div>
                  <div className="oraj__footer-content_link">
                  <a href="https://www.linkedin.com/company/odify-creative/" target="_blank" rel="noreferrer"><img src={linkedin} alt={linkedin} /></a></div>
                  </div>
                <div className="oraj__footer-content_socialsmob2">

                  <div className="oraj__footer-content_link">
                  <a href="https://www.instagram.com/odify.creative/" target="_blank" rel="noreferrer"><img src={instagram} alt={instagram} /></a></div>
                  <div className="oraj__footer-content_link">
                  <a href="https://twitter.com/OdifyCreative" target="_blank" rel="noreferrer"><img src={twitter} alt={twitter} /></a></div>
                  
                  </div>

                  </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer