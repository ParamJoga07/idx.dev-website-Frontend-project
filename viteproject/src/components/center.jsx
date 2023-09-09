import "./Sidebar.css";
import logo from "../assets/image-removebg-preview.png";
import centertextanimation from "../assets/output-onlinegiftools (1).gif";
import arrow from "../assets/Screenshot_2023-09-09_at_1.53.46_AM-removebg-preview.png";

function Center() {
  return (
    <div className="box">
      <div className="textcenter">
        <h3>What if your dev experience was</h3>
        <img
          className="textanimation"
          src={centertextanimation}
          alt=""
          srcset=""
        />
        <br />
        <br />
        <div className="arrow">
          <img className="arrowstyling" src={arrow} alt="" />
        </div>
      </div>
      <center>
        <div className="introbox">
          <div className="introduction">
            <img src={logo} alt="Logo" className="intrologo" />
            <br /><br /><br /><br /><br /><br />
            <h1>Introducing Project IDX</h1>
            <p className="introP">
              These days, launching applications means navigating an endless sea
              of complexity. We felt this pain at Google, so we started Project
              IDX, an experimental new initiative aimed at bringing your entire
              full-stack, multiplatform app development workflow to the cloud.
              <br />
              <br />
              Project IDX starts with a web-based workspace that'll feel
              familiar for coding but fresh. And we're just at the beginning of
              this journey. We'd love your input as we work to make application
              development better.
            </p>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Center;
