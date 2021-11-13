
import "./details.css"
import { useEffect, useState } from 'react';


const axios = require('axios').default;


function Details()
{

    const [data,setData]=useState([])
    const [count,setCount]=useState(0)

    const [ticketType,setTickettype]=useState("")

    const [show_ticket,setShow_ticket]=useState(false);

    const [from,setForm]=useState("delhi");


    useEffect(()=>{

        axios.get('http://localhost:3004/flights_details')
        .then(function (response) {
         
          setData(response.data);
          console.log("response",response.data)
        })
        
    },[from])

    const [adult,setAdult]=useState(0)
    const [children,setChildren]=useState(0)
    const [infant,setInfant]=useState(0)

    const [curr_data,setCurrdata]=useState({
        from:"",
        destination:"",
        departure:"",
        return:"",
        tickettype:{ticketType},
        tickets:{count}

    })

const handleCount=(value)=>{
    if(adult+value!==-1)
    {
        setAdult(adult+value)
        setCount(count+value)

    }
    else{
        return;
    }}


    const handleForm=(e)=>{
        e.preventDefault()
        console.log("curr _data",curr_data)
        setForm(curr_data.from)
        

    }


    const handlechange=(e)=>{

    

        const {name,value,checked,type} =e.target;
        // console.log(e.target.value,e.target.name)
        //console.log(e.target.type)
        setCurrdata({
            ...curr_data,
            [name]:type === 'checkbox' ? checked :value
        })


        
    }


    


    const handlebook=async (e)=>{
        const data =await axios.post('http://localhost:3004/bookmarks', e)
        console.log("bookmarked",data.data)
    }

    return(
        <div>

            <form onSubmit={handleForm}>
            <div className="parent1">

            <div className="child1">
             <label>From</label>   
             <input placeholder="From" name="from" onChange={handlechange}></input>
            </div>

            <div className="child1">
            <label>Destination</label>   
            <input placeholder="Destination" name="destination" onChange={handlechange}></input>
            </div>
            
           <div className="child1">
           <label>Departure</label>   
           <input  type="text"   onFocus={(e) => e.target.type = 'date'} placeholder="Departure" name="departure" onChange={handlechange}></input>
               </div>
            
            <div className="child1">
            <label>Return</label>   
            <input type="text"   onFocus={(e) => e.target.type = 'date'}  placeholder="Return" name="return" onChange={handlechange}></input>
            </div>


             <div className="child1"> 
             <label>Passenger & class</label>
             <div onClick={()=>setShow_ticket(!show_ticket)}  >{count} travellers,{ticketType}</div>
             </div>

           
            <input type="submit" value="UPDATE SEARCH"></input>

            </div>
            </form>
        </div>

    )
}

export {Details}