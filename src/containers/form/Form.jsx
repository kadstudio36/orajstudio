import React, {useState} from 'react';
import './form.css';
import arrowdiagoblack from '../../assets/arrowdiagoblack.svg'
import arrowdiagostraight from '../../assets/arrowdiagostraight.svg'
const Form = () => {

  const [data, setData] = useState({
    want: '',
    name: '',
    email: '',
    tell: '',
    budget: '',
});



const {want, name, email, tell, budget,} = data

const handleChange = e =>{
    setData({...data, [e.target.name]: e.target.value})
};

const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Thank you for submitting. Will get back to you ASAP !`)
    try {
        const response = await  fetch('https://v1.nocodeapi.com/daricreative/google_sheets/ABcqBbpiGdkmMEWc?tabId=Feuille1', {
            method: 'POST' ,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([[want , name, email, tell, budget, new Date().toLocaleString()]]),
        });
        await response.json();
  setData({ ...data,
    want: '',
    name: '',
    email: '',
    tell: '',
    budget: ''

});
    }catch (err) {
        console.log(err)
    }

};



  return (
          <div className="oraj__form section__padding" id="form">
            <div className="oraj__form-content">

              <div className="oraj__form-content_uppertext">
                <h1>Have an idea? Let’s talk!</h1><h2>We offer free consultations. Tell us what you need below!</h2>

              </div>
                <div className="oraj__form-content_container">
                <div className="oraj__form-content_formcontainer">

                <form className="oraj__form-content_form" onSubmit={handleSubmit} >
              <input placeholder="I want: a website, an app, UI/UX design,  branding, development, etc..." className="oraj__form-content_textinput" name="want" value={want} onChange={handleChange} required />
              <input placeholder="Name" className="oraj__form-content_textinput" value={name} onChange={handleChange} name="name"/>
              <input type="email" placeholder="Email" className="oraj__form-content_textinput" name="email" value={email} onChange={handleChange} required/>
              <input placeholder="Tell us more about your project" className="oraj__form-content_textinput" value={tell} onChange={handleChange}  name="tell" required/>
              <input placeholder="Budget (USD)" className="oraj__form-content_textinput" value={budget} onChange={handleChange} name="budget" required/>
           
            <div className="oraj__form-content_buttonwrapper">
              <button className="oraj__form-content_button" ><h1>Submit</h1><img src={arrowdiagoblack} alt="arrowdiagoblack" /></button>
              
              </div>
                </form>

                <div className="oraj__form-content_topdiv"><div className="oraj__form-content_backtop"><a href="#home"><h1>Back to top</h1></a><img src={arrowdiagostraight} alt="arrowdiagostraight" /></div></div>
                  
                </div>
              </div>
            </div>
    </div>
  )
}

export default Form