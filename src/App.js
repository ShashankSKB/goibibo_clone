
import './App.css';
import { Inputbar } from './components/inputbar';
import { Flight } from './components/flightdetails';
import {Switch ,Route ,Link} from 'react-router-dom';
import { Seat } from './components/seatpicker';
import {Footer} from './components/footer';
import Navbar from './components/Navbar';
import { Chectout } from './components/checkout';
import { ProductCarousel } from "./components/ProductCarousel";
import { Offer } from "./components/OfferCarousel";
function App() {
  return (
    <div >

      
      <Switch >
        <Route path="/" exact>
        <Navbar/>
        <Inputbar/>
        <Offer/>
        <ProductCarousel/>
        </Route>
      </Switch >


      <Switch >
      
        <Route path="/flights" exact>
        <Navbar/>
      <Flight/>
        </Route>
      </Switch >


      <Switch >
        <Route path="/checkout" exact>
        <Chectout/> 
        </Route>
      </Switch >

      
      
    
      <Switch>
      <Footer/>
      </Switch>
     
    
    </div>
  );
}


export default App;
