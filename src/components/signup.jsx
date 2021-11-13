import React, {useState} from "react";
import axios from 'axios'
import './css/signup.css'
import IMG from "../img/s.png"


function Signup(){
    const [user,setuser]  = useState([]);
 const[num,setnum]= useState("");
 const[otp,setotp] = useState("");
 const[text,settext] = useState("");
 const[display,setdisplay] = useState("");
 const [show,setshow] = useState(true);


 const Handlex = () => {
    //   console.log("working");
    //   e.preventDefault();
    //   e.target.style.display = "none"
    setshow(!show)
}
 
 const HandelAddTodo = () =>{
       if(num.length == 10 && otp.length == 4){
           if(otp == 1234){
            axios
            .post('http://localhost:3001/todo',{
                
            user : num,
            otp : otp,
              
            })
            .then(res =>{
                console.log(res);
                console.log(res.data);
              
        
                 
            })
            settext("")
           }
           else {
            // alert("please enter valid otp")
            settext("please enter valid otp")
           } 
       } else {
        //    alert ("Please enter valid details")

           settext("please enter valid details")
       }
   
    
    
 }
 
 
   return (
       <>
     <div> 
     {show && <div>
         
        <div id = "main">
           <div>
           <button id = "but1"  onClick = { Handlex }>X</button>
           <h3 id ="text">Login/Signup</h3>
          
           <div id="fieldset">
         <h6 id="legend">Enter Your Mobile Number</h6>
            <div id = "fix">
                <div id = "font_col">+91-</div>
            <input id ="inp" type= "number" onChange = {(e) => setnum(e.target.value)}/>

            </div>
           
            
       </div>

             
           <div id="fieldset">
         <h6 id="legend">Enter Valid OTP</h6>
            <div id = "fix">
                <div id ="font_col">OTP-</div>
            <input id ="inp" type= "number" onChange = {(e) => setotp(e.target.value)}/>
            </div>
           
            
       </div>
            
            <div id= "worning">{text}</div>

             <br/>
            <button id = "btn2" onClick = {HandelAddTodo}>Continue </button>
           </div>
           <p id="gr">By proceeding, you agree to GoIbibo’s <a href="https://www.goibibo.com/info/privacy/" target="_blank">Privacy Policy</a>, <a href="https://www.goibibo.com/info/user-agreement/" target="_blank">User Agreement</a> and <a href="https://www.goibibo.com/info/terms-of-services/" target="_blank">Terms of Service</a></p>

          
       </div>
       <div id = "fix">
           <img src = {IMG}></img>
       </div>
         
         </div>}

      
       </div>
       </>
   )
}

export {Signup}