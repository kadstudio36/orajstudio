import React from 'react'
import './muspace.css';
import Footer from '../footer/Footer'
import arrowdiagostraight from '../../assets/arrowdiagostraight.svg'

import zaapislide0  from '../../assets/muspace/zaapi_SLIDE0.mp4';
import zaapislide1  from '../../assets/muspace/zaapi_SLIDE1.jpg';
import zaapislide2 from '../../assets/muspace/zaapi_SLIDE2.mp4'
import zaapislide3  from '../../assets/muspace/zaapi_SLIDE3.jpg';
import zaapislide4 from '../../assets/muspace/zaapi_SLIDE4.jpg'
import zaapislide5 from '../../assets/muspace/zaapi_SLIDE5.jpg'
import zaapislide6 from '../../assets/muspace/zaapi_SLIDE6.jpg'
import zaapislide7 from '../../assets/muspace/zaapi_SLIDE7.jpg'
import zaapislide8 from '../../assets/muspace/zaapi_SLIDE8.mp4'





const Toastcoin = () => {
    return (


<div className="oraj__toastcoin-content" id="muspace">

<div className="slide1container">

<video loop autoPlay playsInline="true" disablePictureInPicture="true" muted autobuffer className="zaapislide1"
style={{
    width: "100.1%",
    height: "100%",
    zIndex: "1",
    position: "relative",
    objectFit: "fill",
  }}
>
    
<source src={zaapislide0} type="video/mp4"/>
</video>
</div>






<div className="container">



<div className="slide3container">
<div className="zaapislide1">



<img src={zaapislide1} alt="zaapislide1"
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


<div className="slide3container">
<div className="zaapislide3">



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

<div className="slide4container">
<div className="zaapislide4"


>
<img src={zaapislide5} alt="zaapislide5"
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
<img src={zaapislide6} alt="zaapislide6"
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
<div className="zaapislide5"


>
<img src={zaapislide7} alt="zaapislide7"
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
     
<source src={zaapislide8} type="video/mp4"/>
</video>

</div>






</div>




            
            <div className="oraj__toastcoin section__padding">
            <div className="oraj__form-content_topdiv"><div className="oraj__form-content_backtop"><a href="#muspace"><h1>Back to top</h1></a><img src={arrowdiagostraight} alt="arrowdiagostraight" /></div></div>
            </div>
            <Footer /> 



            </div>

    )
  }
  
  export default Toastcoin