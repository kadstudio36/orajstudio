import React from 'react'
import './contact.css';
import Form from '../../containers/form/Form'
import Footer from '../../containers/footer/Footer'

import arrowdiagostraight from '../../assets/arrowdiagostraight.svg'

import behance from '../../assets/socials/black/behance.svg'
import tiktok from '../../assets/socials/black/tik_tok.svg'
import linkedin from '../../assets/socials/black/linkedin.svg'
import instagram from '../../assets/socials/black/instagram.svg'
import twitter from '../../assets/socials/black/twitter.svg'
import facebook from '../../assets/socials/black/facebook.svg'

const Contact = () => {
    return (


            <div className="oraj__contact-content" id="contact">
                <div className="oraj__contact section__padding" id="home">

                        <div className="oraj__contact-content_email"><h1><a href="mailto:orajstudio@gmail.com">orajstudio@gmail.com</a></h1>  </div>            
                        
                        <div className="oraj__footer-content_socials">
                <div className="oraj__footer-content_link">
                  <a href="https://www.behance.net/orajstudio" target="_blank" rel="noreferrer"><img src={behance} alt={behance} /></a></div>
                  <div className="oraj__footer-content_link">
                  <a href="https://www.tiktok.com/@orajstudio" target="_blank" rel="noreferrer"><img src={tiktok} alt={tiktok} /></a></div>
                  <div className="oraj__footer-content_link">
                  <a href="https://www.linkedin.com/company/oraj-studio/" target="_blank" rel="noreferrer"><img src={linkedin} alt={linkedin} /></a></div>
                  <div className="oraj__footer-content_link">
                  <a href="https://www.instagram.com/oraj.studio/" target="_blank" rel="noreferrer"><img src={instagram} alt={instagram} /></a></div>
                  <div className="oraj__footer-content_link">
                  <a href="https://twitter.com/OrajStudio/" target="_blank" rel="noreferrer"><img src={twitter} alt={twitter} /></a></div>
                  <div className="oraj__footer-content_link">
                  <a href="https://www.behance.net/orajstudio" target="_blank" rel="noreferrer"><img src={facebook} alt={facebook} /></a></div>
                  </div></div>
                  
               
                
            <Form />

            <Footer /> 



            </div>

    )
  }
  
  export default Contact