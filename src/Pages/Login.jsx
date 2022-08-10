import React from 'react'

const Login = () => {
  return (
    <div className='login'>
      {/* <h1 className="loginTitle"> Choose login method</h1> */}
      <div className="wapper">
        <div className="left">
            <div className="loginButton google">
                <img src="" alt="" className="icon" />
                 Google
            </div>
            <div className="loginButton facebook">
                <img src="" alt="" className="icon" />
                 FaceBook
            </div>
            <div className="loginButton github">
                <img src="" alt="" className="icon" />
                 Github
            </div>
        </div>
        <div className="center">
            <div className="line"></div>
            <div className="or">Or</div>
        </div>
        <div className="right">
           <input type="text"  placeholder='usename'className="username" />
           <input type="text"  placeholder='password'className="password" />
           <button className="submit">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
