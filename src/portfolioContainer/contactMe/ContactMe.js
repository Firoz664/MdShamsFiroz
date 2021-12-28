
 /* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import Typical from  "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../src/Images/down.jpg";
import load1 from "../../../src/Images/load2.gif";

import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../portfolioContainer/footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
 

   
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        mobile,
        message,
      }; 
     
    
      setBool(true);
      const res = await axios.post(`/contact`,data);
      if (name.length === 0 || email.length === 0 || message.length === 0 || mobile.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
         setBool(false);
         //clearing the textbox area
        setName("");
        setEmail("");
        setMobile("");
        setMessage("");
      }
    }catch(error){
      console.log(error)
    };
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Contact"} title={"Contact Me"}/>
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>{" "}
          <a href="https://github.com/Firoz664/">
                  <i class="fa fa-github"></i>
            </a>
          <a href="/">
            <i className="fa fa-google-plus-square" />
          </a>
          <a href="/">
            <i className="fa fa-instagram" />
          </a>
          <a href="https://www.linkedin.com/in/md-shams-firoz-02a7b7111">
                  <i class="fa fa-linkedin-square"></i>
          </a>
          
        </div>
        {/* // contact form */}
        <div className="back-form">
          <div className="img-back">

            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>

          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name}/>

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email}/>
             
             
            <label htmlFor="mobile">Mobile</label>
            <input type="mobile" onChange={handleMobile} value={mobile}/> 


            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} rows="4" cols="50"/>

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane"/>
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
