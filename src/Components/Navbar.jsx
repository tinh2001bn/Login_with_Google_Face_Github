import React from 'react'

const Navbar = () => {
  return (
 <div className='navbar'>
   <span className='logo'>VanTinh</span>
   <ul className="list">
    <li className="listItem">
    <img src='https://i.pinimg.com/564x/fb/d6/c2/fbd6c223366678972eaadb3d359a4f63.jpg' alt=''  className='avatar'></img>
    </li>
    <li className="listItem">Trang</li>
    <li className="listItem">Logout</li>
   </ul>
</div>
  )
}

export default Navbar
