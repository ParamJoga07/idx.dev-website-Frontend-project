import React from "react";
import "../components/mobileanimation.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowClockwise } from "react-icons/bs";
import Mobileleftsideanimation from "./mobileleftsideanimation";

function Mobileanimation() {
  return (
    <div className="mobileAnimation">
      <div className="work"></div>
      <div className="mobile">
        <center>
          <div className="menubar">
            <div className="iconsantd"><BsArrowLeftShort style={{ fontSize: '24px' }} /></div>
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
             
                <div className="mobilecenter">
                  <center>
                    <div className="mobilebessels">

                      <button className='bbm1' type="submit"></button>

                      <button className='bbm2' type="submit"></button>
                      <button className='bbm3' type="submit"></button>
                      <div className="boxcontainer">
                        <div className="orangebox1">
                          <div className="inv"></div>
                          <div className="circleshape">

                          </div>

                        </div>
                        <div className="bluebox1">


                        </div>
                      </div>
                      <button className='bbm4' type="submit"></button>
                    </div>

                  </center>



                </div>
               
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Mobileanimation;
