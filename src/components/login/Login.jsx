import React, { useState } from 'react'
import"./login.css"
import { toast } from 'react-toastify'

const Login = () => {
    const [avatar,setAvatar]=useState({
        file:null,
        url:""
    })

    const handleAvatar = (e) =>{
        if(e.target.files[0]){
        setAvatar({
            file:e.target.files[0],
            url:URL.createObjectURL(e.target.files[0])
        })

    }
}

const handleLogin = (e) => {
    e.preventDefault();
    toast.success("you are successfully logged in");
    
}


  return (
    <div className='login'>
        <div className="item">
            <h2>Welcome back,</h2>
            <form onSubmit={handleLogin} >
                <input type="text" placeholder='Email or Phone' name='email' />
                <input type="password" placeholder='Password'  name='password'/>
                <button>Sign In</button>
                <p>Forgot Password?</p>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
        <h2>Create an Account</h2>
            <form >
                <label htmlFor="file"> 
                    <img src={avatar.url ||"../../../public/avatar.png"} alt="" />
                    upload a image</label>
                <input type='file' id='file'  style={{display:"none"}} onChange={handleAvatar}/>
                <input type="text" placeholder='username' name='username' />
                <input type="text" placeholder='Email or Phone'  name='email'/>
                <input type="password" placeholder='Password'  name='password'/>
                <button>sign Up</button>
            </form>

        </div>

    </div>
  )
}

export default Login