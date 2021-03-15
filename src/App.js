import logo from './logo.svg';
import './App.css';
import Home from './Screen/Home';
import Header from './Components/HomeComponents/Header';
import AboutUs from './Screen/AboutUs';
import Brands from './Screen/Brands';
import Track from './Screen/Track';
import ContactUs from './Screen/ContactUs';
import Policies from './Screen/Policies';
import Error from './Screen/404';
import 'react-slideshow-image/dist/styles.css'

const App = () => {
  return (
    <div style={{ width: '100%', height: '100%', }}>
      <Header />
      <Home />
      <AboutUs />
    </div>
  );
}

export default App;
