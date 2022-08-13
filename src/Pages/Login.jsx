import React from 'react'

const Login = () => {
 const google= ()=>{
     window.open("http://localhost:4000/auth/google", "_self")
 }
  const facebook =()=>{
    window.open("http://localhost:4000/auth/facebook", "_self");
}
const github= ()=>{
  window.open("http://localhost:4000/auth/github","_self")
}
  return (
    <div className='login'>
      {/* <h1 className="loginTitle"> Choose login method</h1> */}
      <div className="wapper">
        <div className="left">
            <div className="loginButton google"  onClick={google}>
                <img src="https://i.pinimg.com/originals/74/65/f3/7465f30319191e2729668875e7a557f2.png" alt="" className="icon" />
                 Google
            </div>
            <div className="loginButton facebook" onClick={facebook}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt="" className="icon" />
                 FaceBook
            </div>
            <div className="loginButton github" onClick={github}>
                <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="" className="icon" />
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
