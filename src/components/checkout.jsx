import React, {useState,useEffect, useRef} from "react";
import axios from 'axios';
import './css/checkout.css'
import Checkout from "./new/Checkout";
import "./new/Checkout.css"
import Mycard from "./s/Mycard";

function Chectout(){
    const[from,setfrom] = useState("");
    const[to,setto] = useState("");
    const[date,setdate] = useState("");
    const[day,setday] = useState("");
    const[fromstation,setfromstation] = useState("");
    const[tostation,settostation] = useState("");
    const[duration,setduration] = useState("");
    const[toTime,settoTime] = useState("");
    const[fromTime,setfromTime] = useState("");
    const[amount,setamount] = useState("");
    const[coupen,setcoupen] = useState("");
    const[err,seterr] = useState("");

  
     useEffect(() =>{
        axios
        .get('http://localhost:3004/flightData')
        .then(res =>{
            
            setfrom(res.data.from[0])
            setto(res.data.to[0])
            setday(res.data.day)
            setdate(res.data.date)
            setfromstation(res.data.from[1])
            settostation(res.data.to[1])
            setduration(res.data.duration)
            settoTime(res.data.to[2])
            setfromTime(res.data.from[2])
            setamount(res.data.amount)
            
        })
     },[]);
     
     const discount = () =>{
         console.log(coupen)
         if(coupen == "masai10"){
         console.log("working")
            let x = amount * 10/100;
            console.log(x)
            let y = Math.floor(amount-x)
            setamount(y);
            seterr("")
            setcoupen("");
         }
         else{
             seterr ("Enter valid Coupen")
         }
     }
     

    return <>
    <div id = "fix5">
        <div id = "fix6"><img  src = "https://goibibo.ibcdn.com/s3/aerial-dweb/static/media/gi_logo-726f7b06c7740dd89283bf62a4abe1a5.png"></img></div>
    <div id = "s1"></div>
    <div id = "fix7">24/7 goCare Support | Hey Mukul!</div>

    </div>
     
     <div id = "fs">
       {/* //______________________left-side __________________________ */}
       <div id = "first">TICKET DETAILS
       <hr/>
           <div id ="first1">
               <div>   
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  id="Fligh" loading="lazy">
        <path d="M31.95 16.262c-.012 0-.012 0 0 0-.337.762-2.238 1.3-2.238 1.3l-8.137-.012-8.863 12.925-2.088-.15 4.063-10.875-.225-1.95-9.588-.025L.499 22.05l-.5.063 1.438-5.663-.475-.375-.113-.088.125-.1.475-.363L.024 9.849l.5.063 4.338 4.6h9.6l.225-1.95-4.025-10.887 2.088-.15 8.825 12.963 8.137.012s2.713.762 2.238 1.763z">
            </path></svg>

                       {from} - {to} {day}, {date}
       <div id = "green">PARTIALLY REFUNDABLE</div>
                       
                       </div>
               <div id = "ticket">
                <div>
                    <img id = "img3"src = "https://goibibo.ibcdn.com/images/v2/carrierImages/I5.gif"></img> 
                    <div id = "text45"> AirAsia India Economy
                       <br/>
                     I5 - 1569
                      <br/>
                     (Aircraft: 320)
                     </div>
                </div>
                <div id  = "fix12"> 
                    <div id = "daytdate">{day},{date}</div>
                  <div id = "totime"> MOB {toTime}</div>
                 
                 
                  <div id = "fromstation">
                  {fromstation}

                  </div>
                </div>
                <div id ="wholed"><div id = "blue"></div>
                <div id = "du">
                {duration}

                </div>
                <div id ="duration"> 
                Flight Duration
                </div>
                <div id = "plane">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="2rem" height="1.7rem" class="Flight__FlightIcon-sc-1w228os-0 jAvmYp" loading="lazy"><path d="M31.95 16.262c-.012 0-.012 0 0 0-.337.762-2.238 1.3-2.238 1.3l-8.137-.012-8.863 12.925-2.088-.15 4.063-10.875-.225-1.95-9.588-.025L.499 22.05l-.5.063 1.438-5.663-.475-.375-.113-.088.125-.1.475-.363L.024 9.849l.5.063 4.338 4.6h9.6l.225-1.95-4.025-10.887 2.088-.15 8.825 12.963 8.137.012s2.713.762 2.238 1.763z"></path></svg>

                </div>
               </div>
                <div id = "fix13">
                    <div id = "daytdate">
                    {day},{date}
                        </div>
                <div id = "totime">
                BLR {fromTime}

                </div>

                <div id = "fromstation">
                {tostation}

                </div>
                </div>
               </div>
               <div id ="fix123">
               15 Kgs (1 piece only) Check-In, 7 Kgs (1 piece only)
               </div>
           </div>

           <div id ="first1">
           <Checkout></Checkout>

           </div>
           <div id ="first1">ADDONS</div>
           <div id ="first1">PAYMENT DETAILS</div>
           </div>    

       {/* //______________________Right-side __________________________ */}

       <div id = "sec">
           <div id = "sec1">
              <div>
              <h3>
           FARE SUMMARY
           </h3>
           <div id = "adult"> 
           Travelers 1 Adult

           </div>
              </div>
              

           <hr/>

              <div id = "base">Base Fare  <div id = "span">
              <span id = "">&#8377;{amount}</span></div>

              </div>
              <div id = "base">Fee & Surcharge  <div id = "span">
              <span id = "">&#8377;717</span></div>

              </div>
          
              <div id = "base">Addons<br/> 
              <div id = "fontt">
              Charity Donation
              </div>
              <div id = "sp">
              <span id = "">&#8377;10</span></div>
      
              </div>
              <br/>
               <hr/>
              <div id = "base1">Total Amount
               <span id = "hey">&#8377;{amount + 700 + 10}</span>
              </div>
    



           </div>
           <div id = "sec2">
            <h3>Apply Discount</h3>
            <div id= "inner">Have a discount/ promo code to redeem</div>
                <br/>
                <hr/>
            <input id = "input" type ="string" placeholder = "Promo Code" onChange = {(e) => setcoupen(e.target.value)}></input>
            <button id = "button12" onClick ={discount}>Apply</button>
            <br/>
            <div id = "err">{err}</div>
            <br/>
         
            </div>
          
           
           </div>    

    
     </div>

     <div id = "fix90">

     </div>

   

    </>
} 

export {Chectout};

