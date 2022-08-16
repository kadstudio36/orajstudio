import React from 'react'
import './toastcoin.css';
import Footer from '../../containers/footer/Footer'
import arrowdiagostraight from '../../assets/arrowdiagostraight.svg'

import zaapislide1  from '../../assets/toastcoin/zaapi_SLIDE1.mp4';
import zaapislide2 from '../../assets/toastcoin/zaapi_SLIDE2.mp4' 
import zaapislide3  from '../../assets/toastcoin/zaapi_SLIDE3.jpg';
import zaapislide4 from '../../assets/toastcoin/zaapi_SLIDE4.jpg'
import zaapislide5 from '../../assets/toastcoin/zaapi_SLIDE5.mp4'





const Toastcoin = () => {
    return (


<div className="oraj__toastcoin-content" id="toastcoin">

<div className="slide1container">

<video loop autoPlay playsinline="true"
disablePictureInPicture="true"
muted autobuffer className="zaapislide1"
style={{
    width: "100.1%",
    height: "100%",
    zIndex: "1",
    position: "relative",
    objectFit: "fill",



  }}
>
    
<source src={zaapislide1} type="video/mp4"/>
</video>
</div>
<div className="pixel1"></div>


<div className="container">


<div className="slide3container">
<video loop autoPlay playsinline="true"
disablePictureInPicture="true"
muted autobuffer className="zaapislide3"
style={{
    width: "100%",
    left: "100%",
    top: "100%",
    height: "100%",
    objectFit: "contain",


  }}
>
    
<source src={zaapislide2} type="video/mp4"/>
</video>

</div>


<div className="slide4container">
<div className="zaapislide4">



<img src={zaapislide3} alt="zaapislide3"
   style={{

    width: "100%",
    left: "100%",
    top: "100%",
    height: "10%",
    objectFit: "contain",


  }}

/>       


</div>
</div>





<div className="slide4container">
<div className="zaapislide4"


>
<img src={zaapislide4} alt="zaapislide4"
   style={{

    width: "100%",
    left: "100%",
    top: "100%",
    height: "10%",
    objectFit: "contain",


  }}

/>     

</div>
</div>  

<div className="slide5container">
<video loop autoPlay playsinline="true"
disablePictureInPicture="true"
muted autobuffer className="zaapislide5"
style={{
    width: "100%",
    left: "100%",
    top: "100%",
    height: "100%",
    objectFit: "contain",


  }}
>
    
<source src={zaapislide5} type="video/mp4"/>
</video>

</div>

<div className="pixel1"></div>




</div>




            
            <div className="oraj__toastcoin section__padding">
            <div className="oraj__form-content_topdiv"><div className="oraj__form-content_backtop"><a href="#toastcoin"><h1>Back to top</h1></a><img src={arrowdiagostraight} alt="arrowdiagostraight" /></div></div>
            </div>
            <Footer /> 



            </div>

    )
  }
  
  export default Toastcoin