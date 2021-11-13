import { useState } from "react";
import "./Checkout.css";
import {Seat} from "../seatpicker"
import Mycard from "../s/Mycard";
import "../s/Mycard.css"


export default function Checkout () {
    const[text, setText] = useState("");
    const [formData, setFormData] = useState({
        firstname: "", 
        lastname: "",
        email: "",
        mobile: "",
    });
    const[submitted, setSubmitted] = useState(false);
    const[valid, setValid] = useState(false);
    const [payment,setpayment] = useState(false)

    const handleChange = (e) => {
        setText(e.target.name.value);
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.firstname && formData.email && formData.mobile && formData.title) {
            setValid(true);
            // setText("");
            console.log(formData);
        setpayment(!payment)

        }
        setSubmitted(true);
    };
    
    return (
        <div>
            <div className="left-box">
                    <div className="space"><span className="red"> IMPORTANT INFORMATION</span></div>
                    <div className="read">Please read the below information carefully before proceeding towards making the payment.</div>
                    <div className="ul">
                        <div>
                            <span className="dot"></span>
                            <span className="list line">Get 100% Refund Cancellations: Now get full refund on domestic flight cancellations, for COVID+ cases. No questions asked.</span>
                        </div>
                        <div>
                            <span className="dot"></span>
                            <span className="list">Vaccination Requirements: None.</span>
                        </div>
                        <div>
                            <span className="dot"></span>
                            <span className="list">COVID test requirements: None. Negative RT-PCR test report is NOT required to enter Delhi.</span>
                        </div>
                        <div>
                            <span className="dot"></span>
                            <span className="list">Pre-registration or e-Pass requirements: Download the Aarogya Setu App</span>
                        </div>
                        <div>
                            <span className="dot"></span>
                            <span className="list">Quarantinine Guidelines: Those who test positive during the random on-arrival tests will be qurantined at home or hospital for 10 days.</span>
                        </div>
                        <div>
                            <span className="dot"></span>
                            <span className="list">Destination: None.</span>
                        </div>
                        <div>
                            <span className="dot"></span>
                            <span className="list">Remember to web check-in before arriving at the airport; carry a printed or soft copy of the boarding pass.</span>
                        </div>
                        <div>
                            <span className="dot"></span>
                            <span className="list">Check the detailed list of travel guidelines issued by Indian States and UTs here</span>
                        </div>
                        <div>
                            <span className="dot"></span>
                            <span className="list">The latest DGCA guidelines state that is compulsory to wear a mask that covers the nose and mouth properly while at the airport and on the flight.</span>
                        </div>
                        <div>
                            <span className="dot"></span>
                            <span className="list">DISCLAIMER: The information provided above is only for ready reference and convenience of consumers, and may not be exhaustive.</span>
                        </div>
                    </div>
            </div>
            <div className="left-box1">
            <div className="shield">
                <div className="get">Get 100% refund if you test COVID positive</div>
                <div className="worries">Travel without worries with Goibibo's 100% refund guarantee. Now you get full refund on you domestic flight bookings, if you test COVID-positive & cannot fly.</div>
            </div>
            </div>

            <div id = "fix">
            <Seat></Seat>

            </div>
            <div className="left-box2">
                <div>

                    <div className="get">TRAVELLER DETAILS</div>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <div className="check">
                        <span className="adult">Adult Name</span>
                        <select className="title" name="title" onChange={handleChange} >
                            <option selected>Title</option>
                            <option value="mr">Mr</option>
                            <option value="ms">Ms</option>
                            <option value="mrs">Mrs</option>
                        </select>
                        <input className="name" value= {text} onChange={handleChange} type="text" name="firstname" placeholder="First & Middle Name" />
                        <input className="name" value= {text} onChange={handleChange} type="text" name="lastname" placeholder="Last Name" />
                        <br />
                        {submitted && !formData.firstname ?<span className="namespan">First & Middle Name is mandatory</span> : null}
                        <br />
                        </div>
                        <span className="adult white">Email Address</span>
                        <input className="name email" value= {text} onChange={handleChange} type="email" name="email" placeholder="Email" />
                        <span className="ticket">Your Ticket will be sent to this email Adress.</span>
                        <br />
                        {submitted && !formData.email ?<span className="emailspan">Email ID cannot be empty</span> : null}
                        <br />
                        <br />
                        <span className="adult white">Mobile Number</span>
                        <input className="name" value= {text} onChange={handleChange} type="number" name="mobile" placeholder="Mobile No" />
                        <br />
                        {submitted && !formData.mobile ?<span className="mobilespan">Mobile Number cannot be empty</span> : null}
                        <br />
                        <hr />
                        <button className="submit" type="submit">Proceed 

                        </button>
                    </form>
                </div>
            </div>
            {/* <div className="right-box">
                <div>
                    <div className="get">GOIBIBO OFFERS <span className="remove">Remove</span></div>
                    <hr />
                    <div>
                        <input type="checkbox" className="checkbox" />
                        <label className="label">GISUPER</label>
                        <div className="inr">Get INR 450 Instant Discount</div>
                        <div className="last">on your flight booking.</div>
                    </div>
                    <br />
                    <hr />
                    <div>
                        <input type="checkbox" className="checkbox" />
                        <label className="label">GOMSBI</label>
                        <div className="inr">Get Rs. 594 Instant Discount</div>
                        <div className="last">on using SBI MasterCard Debit Cards.</div>
                    </div>
                    <br />
                    <hr />
                    <div>
                        <input type="checkbox" className="checkbox" />
                        <label className="label">GOHDFCEMI</label>
                        <div className="inr">Get Rs. 475 Instant Discount</div>
                        <div className="last">on HDFC Bank EMI paymode.</div>
                    </div>
                </div>
            </div> */}
        {payment&&<Mycard></Mycard>}

     {/* <Mycard></Mycard> */}

        </div>
    )
}