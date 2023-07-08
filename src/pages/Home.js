import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
        <div className='about'> 
        <h2> Ryan Sadeghi-Javid </h2>
        <div className='prompt'> <p>A 17 year old electical engineer @ UWaterloo</p> 
        <LinkedInIcon />
        <EmailIcon />
        <GithubIcon />
        </div>
        </div>
        <div className='skills'> 

        <h1> Skills</h1>
        <ol className='list'>
            <li className='item'>
                <h2>Front-End</h2>
                <span> React, Angular, jQuery, Vue.js </span>
            </li>

            <li className='item'>
                <h2>Back-End</h2>
                <span> Django, MongoDB, Sanity, .NET Core, Flask, MySQL </span>
            </li>

            <li className='item'>
            <h2>Languages</h2>
            <span> Python, C++, Java, JavaScript, C, SQL, Solidity </span>
        </li>


        </ol>
        </div>
    </div>
  )
}

export default Home