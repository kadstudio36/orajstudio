import React from 'react'
import './work.css';
import arrowdiagoblack from '../../assets/arrowdiagoblack.svg'

import toastcoinimg from '../../assets/toastcoin-prev-full.jpg'
import toastcoinlogo from '../../assets/toastcoin-logo.svg'

import muspaceimg from '../../assets/muspace-prev-full.jpg'
import muspacelogo from '../../assets/muspace-logo.svg'


const Toastcoin = () => (
<>
                  <div className="oraj__work-content_toastcoin">
                  <a href="/toastcoin">
                    <div className="oraj__work-content_toastcoinbg">
                    <div className="oraj__work-content_toastcoinleft">
                        <div className="oraj__work-content_toastcointextbox">
                          <div className="oraj__work-content_toastcointags">
                            <div className="oraj__work-content_toastcointagsbox"><h1>WEBSITE</h1></div>
                            <div className="oraj__work-content_toastcointagsbox"><h1>BRANDING</h1></div>
                            <div className="oraj__work-content_toastcointagsbox"><h1>MOTION</h1></div>
                            <div className="oraj__work-content_toastcointagsbox"><h1>UI/UX</h1></div>
                            <div className="oraj__work-content_toastcointagsbox"><h1>3D</h1></div>
                          </div>
                          <div className="oraj__work-content_toastcoinlogo">
                            <img src={toastcoinlogo} alt={toastcoinlogo} /> <h1>Toastcoin</h1>
                          </div>
                          <div className="oraj__work-content_toastcoindescription">
                              <h1>Building a promotional/informational website<br></br> for a cryptocurrency project.</h1><h2>Building a promotional/informational website for a cryptocurrency project.</h2>
                          </div>
                          <div className="oraj__work-content_toastcoinbutton">
                          <button type="button"><h1>See the full Case Study</h1><img src={arrowdiagoblack} alt="arrowdiagoblack" /></button>
                          </div>
                        </div>
                      </div>
                      <div className="oraj__work-content_toastcoinright">
                        <div className="oraj__work-content_toastcoinimg">
                        <img src={toastcoinimg} alt={toastcoinimg} />
                      </div>
                      </div>
                    </div>
                    </a>
                    
                  </div>
</>
)


const Muspace = () => (
  <>
                    <div className="oraj__work-content_toastcoin">
                      <div className="oraj__work-content_muspacebg">
                      <div className="oraj__work-content_toastcoinleft">
                          <div className="oraj__work-content_toastcointextbox">
                            <div className="oraj__work-content_toastcointags">
                              <div className="oraj__work-content_toastcointagsbox"><h1>WEBSITE</h1></div>
                              <div className="oraj__work-content_toastcointagsbox"><h1>APP</h1></div>
                              <div className="oraj__work-content_toastcointagsbox"><h1>BRANDING</h1></div>
                              <div className="oraj__work-content_toastcointagsbox"><h1>MOTION</h1></div>
                              <div className="oraj__work-content_toastcointagsbox"><h1>UI/UX</h1></div>
                            </div>
                            <div className="oraj__work-content_toastcoinlogo">
                              <img src={muspacelogo} alt={muspacelogo} /> <h1>Mu.space</h1>
                            </div>
                            <div className="oraj__work-content_toastcoindescription">
                                <h1>Building a file-sharing platform and promotional<br></br> website focusing mainly on creating a space to<br></br> organize and ideate for musicians.</h1><h2>Building a file-sharing platform and promotional website focusing mainly on creating a space to organize and ideate for musicians.</h2>
                            </div>
                            <div className="oraj__work-content_toastcoinbutton">
                            <button type="button"><h1>See the full Case Study</h1><img src={arrowdiagoblack} alt="arrowdiagoblack" /></button>
                            </div>
                          </div>
                        </div>
                        <div className="oraj__work-content_toastcoinright">
                          <div className="oraj__work-content_toastcoinimg">
                          <img src={muspaceimg} alt={muspaceimg} />
                        </div>
                        </div>
                      </div>
                    </div>
  </>
  )




const Work = () => {
  return (
    <div>
          <div className="oraj__work section__padding" id="work">
            <div className="oraj__work-content">

              <div className="oraj__work-content_uppertext">
                <h1>Latest work</h1><h2>See our featured projects and case studies.</h2>

              </div>
                <div className="oraj__work-content_container">
                  <Toastcoin /> <Muspace />
                  
                </div>
              </div>
            </div>
    </div>
  )
}

export default Work