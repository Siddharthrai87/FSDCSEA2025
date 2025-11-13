import React from 'react'
import Login from './Login'
import Registration from './Registration'
import { Link } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <nav>
        <Link style={{fontSize:'30px',color:'red',marginLeft:'100px',border:'1px solid Black'}} to='/login'>Login</Link>
        <Link style={{fontSize:'30px',color:'red',marginLeft:'150px',border:'1px solid Black'}} to='/register'>Registration</Link>
      </nav>
    </div>
  )
}

export default MainLayout
