import {Item} from "./Item";
import Carousel from "react-elastic-carousel";
import './style.css'
// import '../img'
import logo1 from '../img/logo1.jpg' 
import logo2 from '../img/logo2.jpg' 
import logo3 from '../img/logo3.jpg' 
import logo4 from '../img/logo4.jpg' 
import logo5 from '../img/logo5.jpg' 
import logo6 from '../img/logo6.jpg' 
import logo7 from '../img/logo7.jpg' 
import logo8 from '../img/logo8.jpg' 
import logo9 from '../img/logo9.jpg' 
import logo10 from '../img/logo10.jpg' 
import logo11 from '../img/logo11.jpg' 
import logo12 from '../img/logo12.jpg' 

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


const Offer = () => {

    return (
        
        <>
            <h1 style={{ textAlign: "center" }}>Offers in store for you</h1>
            <p style={{ textAlign: "center" }}>View all live offers for your flight bookings</p>
            <div className="ApnaApp">
                <Carousel breakPoints={breakPoints} className= 'car'>
                    {/* bg,img,logo,text,desc,valid */}
            <Item  logo = {logo1}  desc = "Up to 12% OFF on Flights Booking"   valid = "Valid till:29th Dec'21" arrow = ">" />
            <Item  logo = {logo2}  desc = "Also, save up to Rs. 1500 on flight bookings"  valid = "Valid till:7th Dec'21" arrow = ">"/>
            <Item  logo = {logo3} desc = "Get Flat 14% Instant Discount on Domestic Bookings"   valid = "Valid till:Limited Period Offer" arrow = ">"/>
            <Item  logo = {logo4} desc = "Get Flat Rs.600 OFF + Cashback, with Mobikwik!"   valid = "Valid till:Every Tue -Wed"arrow = ">"/>
            <Item  logo = {logo5} desc = "Use Our Exclusive PRICE LOCK Feature"   valid = "Valid till : Open" arrow = ">"/>
            <Item  logo = {logo6} desc = "Use Code: GISUPER & Book Now!"   valid = "Valid till:Limited Period Offer" arrow = ">"/>
            <Item  logo = {logo7}  desc = "Upto Rs.5000 Instant Discount on Flights"  valid = "Valid till:30th Nov'21" arrow = ">"/>
            <Item  logo = {logo8}  desc = "Grab Up To Rs. 1,200 OFF on Domestic Flights Bookings"  valid = "Valid till: Every Wednesday" arrow = ">"/>
            <Item  logo = {logo9} desc = "Flat 8% Off on Int'l Flight Bookings"   valid = "Valid till: Every Wednesday" arrow = ">"/>
            <Item  logo = {logo10} desc = "Flat INR 600 OFF on discounted prices"   valid = "Valid till : Open" arrow = ">"/>
            <Item  logo = {logo11}  desc = "Flat INR 600 OFF on discounted prices"  valid = "Valid till:31st Mar'22" arrow = ">"/>
            <Item  logo = {logo12}  desc = "Up To Rs. 5000 OFF Flights from Srinagar to Sharjah"  valid = "Valid till:30th Nov'21" arrow = ">"/>

        </Carousel>
      </div>

            

        </>
    )
    

}

export {Offer}