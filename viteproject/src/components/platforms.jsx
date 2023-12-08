import React from "react";
import '../components/platform.css'
import LineAnimation from "./linesanimation";
import Mobileleftsideanimation from "./mobileleftsideanimation";
import MobileRightsideanimation from "./androidemulator";

function Platforms() {
  return (
    <div className="platforms">
      <div className="work"></div>
      <div className="mobile">

        <div className="mobilesidefull">
          <Mobileleftsideanimation></Mobileleftsideanimation>
          {/* <h3 className="textmobileunder">IOS Emulator</h3> */}
          <center>
            <div className="outline">
              <div className="column">
                <div className="roundedboxesfull">
                  <div className="roundedboxes">

                  </div>
                  <div className="roundedboxes">

                  </div>
                  <div className="roundedboxes">

                  </div>
                </div>

                <div className="innerbessel">
                  <div className="buttonanimation">
                    <div className="leftb">
                      <div className="section1">
                        <button className="b1" type="submit"></button>

                      </div>

                      <button className="b12" type="submit"></button>
                    </div>
                    <div className="rightb">
                      <button className="b2" type="submit"></button>
                    </div>

                  </div>
                  <div className="btom">
                    <div className="orange">
                      <center><div className="circleitem">
                      </div></center>

                    </div>
                    <div className="middlebtom"></div>
                    <div className="green">
                      <center><div className="squareitem">
                      </div></center>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </center>
          <div className="mobilerightside">
         <MobileRightsideanimation></MobileRightsideanimation>
         {/* <h3 className="textmobileunder">Android Emulator</h3> */}
         </div>
        </div>

      </div>
    </div>
  );
}

export default Platforms;
