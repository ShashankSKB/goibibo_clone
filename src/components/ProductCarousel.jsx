import {Item} from "./Item";
import Carousel from "react-elastic-carousel";
import { Product } from "./Product";
import './style.css'
// import '../img'
import logo21 from '../img/logo21.PNG' 
import logo22 from '../img/logo22.PNG' 
import logo23 from '../img/logo23.PNG' 
import logo24 from '../img/logo24.PNG' 
import logo25 from '../img/logo25.PNG'
import logo26 from '../img/logo26.PNG'

// import logo21 from '../img/logo21.PNG'


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


const ProductCarousel = () => {

    return (
        
        <>
            <h1 style={{ textAlign: "center" }}>What's new on Goibibo Flights?</h1>
            <p style={{ textAlign: "center" }}>See why India loves to book flights with us</p>
            <div className="ApnaApp">
                <Carousel breakPoints={breakPoints}>
                    {/* bg,img,logo,text,desc,valid */}

                    <Product logo = {logo21} text = 'Alternate Dates' />
                    <Product logo = {logo22} text = 'Connection Guarantee' />
                    <Product logo = {logo23} text = 'Nearby Airports' />
                    <Product logo = {logo24} text = 'Multi City' />
                    <Product logo = {logo25} text = 'Multi Airlines' />
                    <Product logo = {logo26} text = 'Fare Alerts' />
            

        </Carousel>
      </div>

            

        </>
    )
    

}

export {ProductCarousel}