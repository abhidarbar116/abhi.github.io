import React from 'react'
import PropTypes from 'prop-types'
import  {Link} from "react-router-dom";

export default function Navbar(props) {
  const toggleFillStyles = {
    
    backgroundColor: '#ccc', // Set your desired fill color here
    transition: 'transform 0s'
  };

  const checkedToggleFillStyles = {
    ...toggleFillStyles,
   //transform: 'translateX(10%)',
    backgroundColor: '#fffff', // Set your desired fill color when the toggle is checked
  };
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <div className={`form-check form-switch mx-2 text-${props.mode==="light"?"dark":"light"}`}>
            <input className="form-check-input " type="checkbox"  role="switch" id="flexSwitchCheckDefault" onClick={props.blueMode}  style={props.mode === "light" ? toggleFillStyles : checkedToggleFillStyles} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Blue DarkMode</label>
          </div>
          
          <div className={`form-check form-switch mx-2 text-${props.mode==="light"?"dark":"light"}`}>
            <input className="form-check-input " type="checkbox"  role="switch" id="flexSwitchCheckDefault" onClick={props.toogleMode}  style={props.mode === "light" ? toggleFillStyles : checkedToggleFillStyles} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
          </div>

        </div>
      </div>
    </nav>
  )
}

Navbar.Prototypes = {
  title: PropTypes.string
}

Navbar.defaultProps = {
  title: "ReactApp"
} 