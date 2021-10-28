import React from 'react'
import './spinner.css'
const Loader = () => {
  return (
<div className="containersp">
        <div className="animation">
            <div className="spin-loading"></div>
            <div className="dot-loading">
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
            </div>  
        </div>
    </div>    
  )
}

export default Loader