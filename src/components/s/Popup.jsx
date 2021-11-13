import React from "react";
import Popup from "reactjs-popup";

const contentStyle = {
  width: "50%",
  height : "70%",
  textAlign: "center",



};

export default function CustomModal ({number,name,date,cvv}) {
const [show,setShow] = React.useState(true);
  // console.log(number,date,name,cvv);

  

  const handleShow = () =>{
  
    console.log(name.length,number.length);
    if(name.length !== 0 && number.length !== 0 && date.length !== 0 && cvv.length !== 0){
       
        setShow (true);
    }
    else{
      setShow (false);
    }
  }
    return(
     <div>

{show && 
  <Popup
    trigger={ <button onClick={handleShow} className="button"> Pay </button>}
    modal
    contentStyle={contentStyle}
  >
  
    {close => (
      <div className="modal"> 
      <a className="close" onClick={close}>
      &times;
    </a>
        <div className="content" style={{color:"green"}}>
          {" "}
   <p className="content-p"> 
   <img style ={{height : "90%" , width : "90%"}}src = "https://assets.materialup.com/uploads/64677f88-73ed-43ee-b16f-395bc5f3f314/preview.png"></img>
   </p>
        </div>
        <div className="actions">
         
          <button className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            Close Now
          </button>
        </div>
      </div>
)}
  </Popup>
  }
  </div>
    )}