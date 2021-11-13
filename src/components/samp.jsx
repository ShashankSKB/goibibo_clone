// import { useEffect, useState } from 'react';
// import "./flightdetails.css";


// const axios = require('axios').default;




// function Flight()
// {
//     const [data,setData]=useState([])
//     const [count,setCount]=useState(0)

//     const [ticketType,setTickettype]=useState("")

//     const [show_ticket,setShow_ticket]=useState(false);

//     const [from,setForm]=useState("delhi");


//     useEffect(()=>{

//         axios.get('http://localhost:3004/flights_details')
//         .then(function (response) {
         
//           setData(response.data);
//           console.log("response",response.data)
//         })
        
//     },[from])

//     const [adult,setAdult]=useState(0)
//     const [children,setChildren]=useState(0)
//     const [infant,setInfant]=useState(0)

//     const [curr_data,setCurrdata]=useState({
//         from:"",
//         destination:"",
//         departure:"",
//         return:"",
//         tickettype:{ticketType},
//         tickets:{count}

//     })

// const handleCount=(value)=>{
//     if(adult+value!==-1)
//     {
//         setAdult(adult+value)
//         setCount(count+value)

//     }
//     else{
//         return;
//     }}


//     const handleForm=(e)=>{
//         e.preventDefault()
//         console.log("curr _data",curr_data)
//         setForm(curr_data.from)
        

//     }


//     const handlechange=(e)=>{

    

//         const {name,value,checked,type} =e.target;
//         // console.log(e.target.value,e.target.name)
//         //console.log(e.target.type)
//         setCurrdata({
//             ...curr_data,
//             [name]:type === 'checkbox' ? checked :value
//         })


        
//     }


    


//     const handlebook=async (e)=>{
//         const data =await axios.post('http://localhost:3004/bookmarks', e)
//         console.log("bookmarked",data.data)
//     }
    
//     return(
//         <div >


//             {/* searchbox */}
            
            
//             <div className="input_data">

//             <div style={{display:"flex",justifyContent:"left",margin:"0 55px "}}>
//             <input type="radio" value="one way"></input>One way
//             <input type="radio" value=""></input>Round trip
//             </div>

//             <div className="swapbutton">
//             <button ><img src="https://cdn-icons-png.flaticon.com/512/61/61165.png"></img></button>
//         </div>   

//             <div className="">
//                 <div>From</div>
//                 <div>Destination</div>
//                 <div>Depature</div>
//                 <div>Return</div>
//                 <div></div>
//             </div>
            
//             <form className="form_input2" onSubmit={handleForm}>
            
             
                 
//                 <input placeholder="From" name="from" onChange={handlechange}></input>
//                 <input placeholder="Destination" name="destination" onChange={handlechange}></input>
//                 <input  type="text"   onFocus={(e) => e.target.type = 'date'} placeholder="Departure" name="departure" onChange={handlechange}></input>
//                 <input type="text"   onFocus={(e) => e.target.type = 'date'}  placeholder="Return" name="return" onChange={handlechange}></input>
//                 <div onClick={()=>setShow_ticket(!show_ticket)} style={{width:"200px",border:"1px solid black"}} >{count} travellers,{ticketType}</div>

               
//                <input type="submit" value="UPDATE SEARCH"></input>

//             </form>

//             <div style={{display:"flex",justifyContent:"left" ,margin:"0px 55px" }} >
//                 <input type="radio"></input> REGULAR
//                 <input type="radio"></input>DEFENCE
//                 <input type="radio" ></input>SENIOR CITIZEN
//                 <input type="radio"></input>STUDENT
//                 <input type="radio"></input>EXTRA SEAT
//             </div>

//              {/* travelling class selection */}
//              { show_ticket && <div className="travelling_class">
//             <div style={{display:"flex",justifyContent:"center"}}>
//             <div>
//                     <label>Adults</label>   <h1>{adult}</h1>
//                     <button onClick={()=>{handleCount(-1)}}>-</button>
                 
//                     <button  onClick={()=>{handleCount(1)}}>+</button>
//             </div>

//             <div>
//                     <label>Children</label>   <h1>{children}</h1>
//                     <button onClick={()=>{
//                         if(children-1 !==-1)
//                         {
//                         setChildren(children-1);
//                         setCount(count-1);
//                         }
//                         }}>-</button>
                 
//                     <button  onClick={()=>{setChildren(children+1); setCount(count+1);}}>+</button>
//             </div>

//             <div>
//                     <label>Infants</label>   <h1>{infant}</h1>
//                     <button onClick={()=>{
//                         if(infant-1 !==-1)
//                         {
//                             setInfant(infant-1);
//                         setCount(count-1);
//                         }
//                         }}>-</button>
                 
//                     <button  onClick={()=>{setInfant(infant+1); setCount(count+1);}}>+</button>
//                         <br></br>
                   
//             </div>

//             </div>

//             <div>
//             Travel class: <select onChange={(e)=>{
               
//                 setTickettype(e.target.value)
//             }}>
//                         <option>First Class</option>
//                         <option>Econmony</option>
//                         <option>Business</option>
//                         <option>Premium Econmony</option>
//             </select>
//             </div>
//             </div>}


//             </div>


            
//             {/* tickets display section */}

            

           
//             <div className="body">
//             <div className="filters" >
//             <h3>Filters</h3>
//             <hr></hr>

//             {/*  filter departure div */}
//             <div >
//                 <h4>Departures</h4>

//                 <div className="departures">
//                 <div onClick={
//                     ()=>{
//                         setData(data.filter((e)=>e.fromTime >11.00))
//                     }
//                 } >Before 11 am</div>
//                 <div> 11 am -5 pm</div>
//                 </div>
                
//                 <div  className="departures">
//                 <div>5pm-9pm</div>
//                 <div>After 9pm</div>
//                 </div>
               
//             </div>
//             <hr></hr>

//                {/* filter Stops div  */}
//             <div>
//             <h4>Stops</h4>
//             <div className="departures">
//             <div  >Direct</div>
//             <div> 1 Stop</div>
//             </div>

//             </div>

//             <hr></hr>


//             <div>
//             <h4>Preffered Airlines</h4>
//             <div className="departures" style={{flexDirection:'column' }}>
//              <div className="checkbox_color">
//              <input type="checkbox" value="" ></input><img src="https://play-lh.googleusercontent.com/OhZSLjRDLvFLqtDp9bIgcvAweZIg5V5uIMI_7kOaS-9nPR043DUfoibkn1BgwG7Ai1U"></img>Indigo
//             </div>
//             <div className="checkbox_color" >
//              <input type="checkbox" value=""></input><img src="https://play-lh.googleusercontent.com/OhZSLjRDLvFLqtDp9bIgcvAweZIg5V5uIMI_7kOaS-9nPR043DUfoibkn1BgwG7Ai1U"></img>Airindia
//             </div> 
//             <div className="checkbox_color">
//              <input type="checkbox" value=""></input><img src="https://play-lh.googleusercontent.com/OhZSLjRDLvFLqtDp9bIgcvAweZIg5V5uIMI_7kOaS-9nPR043DUfoibkn1BgwG7Ai1U"></img>Go First
//             </div> 
//             <div className="checkbox_color">
//              <input type="checkbox" value=""></input><img src="https://play-lh.googleusercontent.com/OhZSLjRDLvFLqtDp9bIgcvAweZIg5V5uIMI_7kOaS-9nPR043DUfoibkn1BgwG7Ai1U"></img>Indigo
//             </div>    
            
//             </div>

//             </div>

           
                
//             </div>

//             <div className="details_flight">
//             {data.filter((e)=>(e.from===`${from}`) ).map((e)=>(
//                 <div className="particular_flight">
//                     <div className="curr_flight">
                        
//                          <div ><img src={e.img}></img>  {  e.company}</div>
//                          <div className="topHeading">{e.from},India</div>
//                          <div className="curr_flight_time">{e.fromTime}</div>
//                     </div>
                
//                   <div style={{margin:"auto 0px" ,fontSize:"1.0rem"}}>{e.duration}</div>
//                 <div>
//                  <br></br>   
//                 <div className="topHeading" style={{margin:"4px"}}>{e.to},India</div>
//                 <div className="curr_flight_time">{e.toTime}</div>
//                  </div>

//                 <div style={{margin:"auto 0px" ,fontSize:"1.2rem"}}>
//                 <div ><del>&#2352;</del> {e.price}</div>   
                
//                 </div>
                 
//            <div>
//            <button onClick={()=>{
//                     console.log(e)
//                     handlebook(e)

                    
//                 }}>BOOK</button>
//                 <br></br>
//            </div>
                
//                 </div>
                
                
//             ))}

//             </div>

//             </div>
            
           
            
//         </div>
//     )
// }

// export {Flight}