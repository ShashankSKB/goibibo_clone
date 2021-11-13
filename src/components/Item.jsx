import styled from "styled-components";
import './style.css'

// export default styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 250px;
//   width: 100%;
//   background-color: #00008B;
//   color: #fff;
//   margin: 0 15px;
//   font-size: 4em;
// `;

const Item = ({logo,desc,valid,arrow}) => {
   
    
    return (
        <div className = "slider">
            <img src={logo} alt="Logo" />
                
            <p className = "desc">{desc}</p>
            <p style={{textAlign:"center !important",marginLeft: "35px" }}>{valid}</p>
            {/* <p> {arrow} </p> */}
                
                

            </div>
           
        // </div>
    )
    
}


export {Item}

