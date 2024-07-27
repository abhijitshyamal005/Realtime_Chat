import React, { useState } from 'react'
import "./chatlist.css"
export const Chatlist = () => {

  const [addmode, setAddmode]=useState(false);
  return (
    <div className='chatlist'>
      <div className="search">
        <div className="searchBar">
          <img src="../../../../public/search.png" alt="" />
          <input type="text" placeholder='search message' />


        </div>
        <img src={addmode ? "../../../../public/minus.png":"../../../../public/plus.png"} alt="" className='add'
        onClick={()=>setAddmode((prev)=>!prev)} />
        
      </div>
      <div className="item">
        <img src="../../../../public/avatar.png" alt="" />
        <div className="texts">
          <span>Labani</span>
          <p>Hey abhi .....</p>

        </div>
      </div>
      <div className="item">
        <img src="../../../../public/avatar.png" alt="" />
        <div className="texts">
          <span>Labani</span>
          <p>Hey abhi .....</p>

        </div>
      </div>
      <div className="item">
        <img src="../../../../public/avatar.png" alt="" />
        <div className="texts">
          <span>Labani</span>
          <p>Hey abhi .....</p>

        </div>
      </div>
      <div className="item">
        <img src="../../../../public/avatar.png" alt="" />
        <div className="texts">
          <span>Labani</span>
          <p>Hey abhi .....</p>

        </div>
      </div>
      <div className="item">
        <img src="../../../../public/avatar.png" alt="" />
        <div className="texts">
          <span>Labani</span>
          <p>Hey abhi .....</p>

        </div>
      </div>
      <div className="item">
        <img src="../../../../public/avatar.png" alt="" />
        <div className="texts">
          <span>Labani</span>
          <p>Hey abhi .....</p>

        </div>
      </div>
      <div className="item">
        <img src="../../../../public/avatar.png" alt="" />
        <div className="texts">
          <span>Labani</span>
          <p>Hey abhi .....</p>

        </div>
      </div>
      <div className="item">
        <img src="../../../../public/avatar.png" alt="" />
        <div className="texts">
          <span>Labani</span>
          <p>Hey abhi .....</p>

        </div>
      </div>
      <div className="item">
        <img src="../../../../public/avatar.png" alt="" />
        <div className="texts">
          <span>Labani</span>
          <p>Hey abhi .....</p>

        </div>
      </div>

    </div>
  )
}
export default Chatlist
