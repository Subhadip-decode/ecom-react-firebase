import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { authz } from '../config/Config'
// import { CartContext } from '../Global/CartContext'
export const Navbar = ({user}) => {
  console.log(user);
  const navigate = useNavigate();
  // const { totalQty } = useContext(CartContext);
  const handleLogout = () => {
    authz.signOut().then(()=>{
      navigate('/login');
    })
  }
  return (
    <div className="navbox">
        <div className='leftside'><h1>.IEE</h1></div>
        {!user && <div className='rightside'>
            <Link to='/signup' className='navlinks'>SIGN UP</Link>    
            <Link to='/login' className='navlinks'>LOGIN</Link>    
        </div>}
        {user && <div className='rightside'>
        <span><Link to="/" className='navlink'>{user}</Link></span>
                <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
                {/* <span className='no-of-products'>{totalQty}</span> */}
                <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
          </div>}

    </div>
  )
}
