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

const Product = ({logo,text}) => {
   
    
    return (
        <div className = "slider2">
            <p className = "title">{text}</p>
            <img src={logo} alt="Logo" />
                
           
                
                

            </div>
           
        // </div>
    )
    
}


export {Product}

