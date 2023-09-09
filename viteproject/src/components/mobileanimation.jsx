import React from "react";
import "../components/mobileanimation.css";
import { BsArrowLeftShort } from "react-icons/bs";
import {BsArrowRightShort} from "react-icons/bs";
import {BsArrowClockwise} from "react-icons/bs";

function Mobileanimation() {
  return (
    <div className="mobileAnimation">
      <div className="work"></div>
      <div className="mobile">
        <center>
            <div className="menubar">
             <div className="iconsantd"><BsArrowLeftShort style={{ fontSize: '24px' }}/></div>
             <div className="iconsantd"><BsArrowRightShort style={{ fontSize: '24px' }} /></div>  
             <div className="iconsantd"><BsArrowClockwise style={{ fontSize: '15px', marginTop: '5px' }} /></div>
           
                <div className="searchbar">

                </div>
            </div>
        <div className="container">
        <div className="dots">

        </div>
        <div className="textanimation">

        </div>
        <div className="phonepic">

        </div>
      </div>
      </center>
      </div>
    </div>
  );
}

export default Mobileanimation;
