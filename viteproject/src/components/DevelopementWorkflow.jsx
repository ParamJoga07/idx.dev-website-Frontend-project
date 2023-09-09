import React from "react";
import "../components/developement.css";
import logo from "../assets/image-removebg-preview.png";
import arrow from "../assets/Screenshot_2023-09-09_at_1.53.46_AM-removebg-preview.png";

function DevelopementWorkflow() {
  return (
    <center>
      <div className="developementbox">
        <div className="development">
          <h5 >Let’s make the development workflow better, together</h5>
          <p className="introP">
            But this is just a start. While software development today is more
            accessible than ever before, it’s also more complicated. 
            <br /><br />We’re
            already exploring additional ways to simplify and speed up your
            entire workflow, like richer collaboration tools, across environment
            sync, pair debugging, code review and more, all powered by the
            latest AI technology. 
            <br /><br />
            But we can't do this alone — we want to hear
            from you as we build Project IDX, and reimagine a better workflow to
            build, ship and manage apps. To be one of the first people to try it
            out and give feedback, join the waitlist for our limited preview
            below.
            
          </p>
        </div>
      </div>
    </center>
  );
}

export default DevelopementWorkflow;
