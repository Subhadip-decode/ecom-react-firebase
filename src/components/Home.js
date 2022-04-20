import React,{useEffect} from 'react'
import { Navbar } from './Navbar'
import { Products } from './Products'
import '../css/Home.css'
import { useNavigate } from 'react-router-dom'
import { authz } from '../config/Config'

export const Home = ({user}) => {

  const navigate = useNavigate();
  useEffect(() => {
    authz.onAuthStateChanged(user =>{
      if(!user){
        navigate('/login');
      }
    })
  })

  return (
    <div className='wrapper'>
        <Navbar user={user}/>
        <Products/>
    </div>
  )
}
