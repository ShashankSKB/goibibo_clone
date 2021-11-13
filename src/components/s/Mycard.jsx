import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Mycard.css';
import ap1 from "../imgs/am_amex_06.jpg";
import ap2 from "../imgs/PngItem_2572317.png";
import ap3 from "../imgs/Diners-Club-International-logo.png";
import ap4 from "../imgs/Rupay-Logo.png";
import ap5 from "../imgs/1200px-Maestro_logo.svg.png";
import ap6 from "../imgs/Visa_Inc._logo.svg.png";
import ap7 from "../imgs/2560px-MasterCard_Logo.svg.png";
import Pop from "./Popup";
// import {BrowserRouter} from "react-router-dom"

export default function Mycard() {
const [number,setNumber] = useState("");
const [name,setName] = useState("");
const[date,setDate] = useState("");
const [cvv,setCvv] = useState("");


const [numberErr,setNumberErr] = useState({});
const [nameErr,setNameErr] = useState({});
const [dateErr,setDateErr] = useState({});
const [cvvErr,setCvvErr] = useState({});


// submit
const onSubmit =(e)=>{
    e.preventDefault();
    const isValid = formValidation();
    
    if(isValid){
        setNumber("");
        setName("");  
        setDate("");
        setCvv(""); 
    }
}



    const shoot = () => {
      alert("Congratulations! Your Seat is Booked Now");
    }
    // const shoot = () =>{
    //     <Popup trigger={<button> Trigger</button>} position="right center">
    //     <div>Popup content here !!</div>
    //   </Popup>
    // }
    
// react.useEffect( () =>{
    
//     shoot();
// },[] )

    const formValidation = ()=> {
    const numberErr = {};
    const nameErr = {};
    const dateErr = {};
    const cvvErr = {};

    let isValid = true;

    if(number.length !== 12){
        numberErr.numberShort ="Please Enter Valid Card Number";
        isValid = false;

    }
    // if(number.length < 1){
    //     numberErr.numberShort ="Please Enter Valid Card Number";
    //     isValid = false;

    // }

    if(name.trim().length < 2){
        nameErr.nameShort ="Please Enter Valid Name";
        isValid = false;
    }

    if(date.length < 1){
        dateErr.dateShort ="Please Enter Valid Expiry Date (MM/YY)";
        isValid = false;
    }

    if(cvv.length < 1){
        cvvErr.cvvShort ="Please Enter Valid CVV Number";
        isValid = false;

    }


    setNumberErr(numberErr);
    setNameErr(nameErr);
    setDateErr(dateErr);
    setCvvErr(cvvErr);

    return isValid;
}
    return (
        <div class="main-container">
            <span>PAYMENT DETAILS</span>
         <div class="allCards">
             <span class="banktype american"><img src = {ap1} alt= "Alternative Text" /></span>
             <span class="banktype discover"><img src ={ap2}  alt="Alternative Text" /></span>
             <span class="banktype dinner"><img src = {ap3}  alt="Alternative Text" /></span>
             <span class="banktype rupay"><img src = {ap4} alt="Alternative Text" /></span>
             <span class="banktype mestro"><img src = {ap5}  alt="Alternative Text" /></span>
             <span class="banktype visa"><img src = {ap6} alt="Alternative Text" /></span>
             <span class="banktype master"><img src = {ap7} alt="Alternative Text" /></span>
             </div>
             <div class="card-form">
                 <form onSubmit = {onSubmit}>
                     <div class="form-data">
                     <div class="flex-group">
                <h3>Card Number</h3>
                 <input value = {number} onChange={(e)=>{setNumber(e.target.value)}} pattern="[0-9]*" inputmode="numeric"   class="card-number" placeholder="Card Number"/>
                 {Object.keys(numberErr).map((key) => {
                     return <div style={{color:"red",fontSize :12}}>{numberErr[key]}</div>
                     })}
                 </div>
                
                 <div class="flex-space"></div>

                 <div class="flex-group">
                     <h3>Name on Card</h3>
                     <input value = {name} onChange={(e)=>{setName(e.target.value)}} type="text" class="card-number" placeholder="Name"/>
                     {Object.keys(nameErr).map((key)=>{
                     return <div style={{color:"red",fontSize :12}}>{nameErr[key]}</div>
                     })}
                 
                 </div>
                 </div>
               
                 <div class="checkbox">
               <div><input type="checkbox"></input></div>
                <div><p>Save my card details without CVV. <span><a href="" class="info">Info</a></span></p></div>
                </div>
                
                <div class="form-data ">
                <div class="expiry one">
                     <h3>Expiry Date</h3>
                     <input value = {date} onChange={(e)=>{setDate(e.target.value)}} inputmode="numeric" type="text" class="card" placeholder="MM/YY" />
                     {Object.keys(dateErr).map((key)=>{ 
                     return <div style={{color:"red", fontSize :12}}>{dateErr[key]}</div>
                     })}
                 </div>
                 <div class="expiry">
                     <h3>Enter CVV</h3>
                     <input value = {cvv} onChange={(e)=>{setCvv(e.target.value)}} pattern="[0-9]*" inputmode="numeric" type="password" class="card" placeholder="CVV NO."/>
                     {Object.keys(cvvErr).map((key)=>{
                     return <div style={{color:"red", fontSize :12}}>{cvvErr[key]}</div>
                     })}
                 </div>
               </div>
             {/* <button type="submit" class="pay">Pay</button> */}
            
             <Pop number =  {number} name ={name} date={date} cvv ={cvv} /> 

            {/* {show ? <Pop /> : <button type="submit" onClick={handleShow} class="pay">Pay</button>} */}



             </form>
             </div>
</div>
    )

}

