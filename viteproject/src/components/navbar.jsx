import React from 'react';
import '../App'

function Sidebar() {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-left">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="arrow">
              <a href="#">
                <FontAwesomeIcon icon="tachometer" /><br />
                Dashboard
              </a>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
              >
                <FontAwesomeIcon icon="table" /><br />
                Tables<span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#">Table 1</a></li>
                <li><a href="#">Table 2</a></li>
                <li><a href="#">Table 3</a></li>
                <li><a href="#">Table 4</a></li>
                <li><a href="#">Table 5</a></li>
                <li><a href="#">Table 6</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
              >
                <FontAwesomeIcon icon="file" /><br />
                Report<span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#">Report A</a></li>
                <li><a href="#">Report B</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
              >
                <FontAwesomeIcon icon="user" /><br />
                Attendance<span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#">Team Attendance</a></li>
                <li><a href="#">User Attendance</a></li>
              </ul>
            </li>
            <li><a href="#"><FontAwesomeIcon icon="map-marker" /><br />Location</a></li>
            <li><a href="#"><FontAwesomeIcon icon="line-chart" /><br />Sales</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
