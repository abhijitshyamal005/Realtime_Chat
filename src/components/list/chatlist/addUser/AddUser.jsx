import React from 'react'
import "./addUser.css";

const AddUser = () => {
  return (
    <div className='addUser'>
        <form >
            <input type="text" placeholder='username' name='username' />
            <button>Search</button>
        </form>
        <div className="user">
            <div className="detail">
                <img src="../../../public/avatar.png" alt="" />
            <span>mamamm</span>
            </div>
            <button>Add</button>

        </div>
    </div>
  )
}

export default AddUser