import React from 'react'

const Dmd = ({bagd}) => {
    return (
        <div>
         <h6 style={{color:"white"}}>{bagd._id}</h6>   
         <h1 style={{color:"white"}}>{bagd.isReserved}</h1>
        </div>
    )
}

export default Dmd
