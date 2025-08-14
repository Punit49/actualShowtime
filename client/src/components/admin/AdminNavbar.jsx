import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const AdminNavbar = () => {
  return (
    <div className='flex items-center justify-between px-6 md:px-10 h-16 border-b border-gray-300/30'>
      <Link to="/" className='max-md:flex-1 logoBox'>
            <img src={assets.Preview} alt="Logo" className='h-18 w-9' />
            <p>howTime</p>
      </Link>
    </div>
  )
}

export default AdminNavbar
