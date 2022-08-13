import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {
  // const logout = () => {
  //   window.open("http://localhost:4000/auth/logout", "_self");
  // };
  return (
 <div className='navbar'>
   <span className='logo'>VanTinh</span>
   {
    user ?(
   <ul className="list">
    <li className="listItem">
    <img src={user.photos[0].value} 
    alt=''  
    className='avatar'>
    </img>
    </li>
    <li className="listItem"> {user.displayName} </li>
    <li className="listItem" >Logout</li>
   </ul>
   ):(<Link  className='link' to="login">Login</Link>)
  }
</div>
  )
}

export default Navbar
