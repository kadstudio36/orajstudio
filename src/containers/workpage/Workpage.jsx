import React from 'react'
import './workpage.css';
import Work from '../../containers/work/Work'
import Footer from '../../containers/footer/Footer'

import arrowdiagostraight from '../../assets/arrowdiagostraight.svg'

const Workpage = () => {
    return (


            <div className="oraj__workpage-content" id="workpage">
            <Work />
            
            <div className="oraj__workpage section__padding">
            <div className="oraj__form-content_topdiv"><div className="oraj__form-content_backtop"><a href="#work"><h1>Back to top</h1></a><img src={arrowdiagostraight} alt="arrowdiagostraight" /></div></div>
            </div>
            <Footer /> 



            </div>

    )
  }
  
  export default Workpage