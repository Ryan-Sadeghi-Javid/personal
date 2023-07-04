import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
        <LinkedInIcon />
        </div>
        <p> &copy; 2023 ryanjavid.com</p>
    </div>
  )
}

export default Footer