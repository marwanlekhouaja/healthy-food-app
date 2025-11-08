import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <nav className='p-2 shadow-2xl bg-gray-200 flex gap-4 justify-end text-2xl'>
            <Link to="/Home" className="text-none gap-4 text-dark">Home</Link>
            <Link to="/Login" className="text-none gap-2 text-dark">Login</Link>
        </nav>
    </div>
  )
}

export default Header