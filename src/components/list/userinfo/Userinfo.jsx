import React from 'react'
import "./userinfo.css";

const Userinfo = () => {
  return (
    <div className='userinfo'>
        <div className="user">
            <img src="../../../../public/avatar.png" alt="" />
            <h2>Abhijit</h2>
        </div>
        <div className="icons">
            <img src="../../../../public/more.png" alt="" />
            <img src="../../../../public/video.png" alt="" />
            <img src="../../../../public/edit.png" alt="" />

        </div>

    </div>
  )
}

export default Userinfo