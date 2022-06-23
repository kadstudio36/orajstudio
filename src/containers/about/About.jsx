import React from 'react'
import './about.css';
import bgimage from '../../assets/bgimage.png'
import websitesimg from '../../assets/websitesimg.jpg'
import applicationsimg from '../../assets/applicationsimg.jpg'
import brandingimg from '../../assets/brandingimg.jpg'


const About = () => {
  return (
    <div>
        <div className="oraj__about-content_bgimage">
              <img src={bgimage} alt={bgimage} />
            </div>
        <div className="oraj__about section__padding" id="about">
          <div className="oraj__about-content">

            <div className="oraj__about-content_uppertext">
            <h1>About us</h1><h2>Oraj is a creative agency with market-leading design and development skills. We help you transform your brand and make the digital shift.</h2>
            </div>
              <div className="oraj__about-content_cards">
                <div className="oraj__about-content_websites">
                  <div className="oraj__about-content_websitesbg">
                  <div className="oraj__about-content_websitesimgtxt">
                  <img src={websitesimg} alt={websitesimg} />
                  <div className="oraj__about-content_websitestxt">
                  <h1>Websites</h1><h2>We build business and individual websites tailored to your needs.</h2>
                  </div>
                  </div>
                  </div>
                </div>
                <div className="oraj__about-content_applications">
                <div className="oraj__about-content_applicationsbg">
                <div className="oraj__about-content_applicationsimgtxt">
                  <img src={applicationsimg} alt={applicationsimg} />
                  <div className="oraj__about-content_applicationstxt">
                  <h1>Applications</h1><h2>We make applications and mobile solutions for our clients.</h2>
                  </div>
                  </div>
                  </div>
                </div>
                <div className="oraj__about-content_branding">
                <div className="oraj__about-content_brandingbg">
                <div className="oraj__about-content_brandingimgtxt">
                  <img src={brandingimg} alt={brandingimg} />
                  <div className="oraj__about-content_brandingtxt">
                  <h1>Branding</h1><h2>We take care of market research, branding and business models.</h2>
                  </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default About