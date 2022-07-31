import About from  '../../containers/about/About.jsx'
import Footer from '../../containers/footer/Footer';
import Form from '../../containers/form/Form';
import Header from '../../containers/header/Header';
import Work from '../../containers/work/Work';


const Homepage = () => {
    return (
        <div>
                <Header />
                <About />
                <Work />
                <Form />
                <Footer />
    </div>
    )
  }
  
  export default Homepage