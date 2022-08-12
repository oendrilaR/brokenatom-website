import React from 'react'
import './css/onScroll.css'

const myFunction = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

window.onscroll = function() {myFunction()};

const onScroll = () => {
  return (
    <div className="scroll_indicator">
        <div className="progress-container">
            <div className="progress-bar" id="myBar" style={{background:'white'}}></div>
        </div>  
    </div>
  )
}

export default onScroll
