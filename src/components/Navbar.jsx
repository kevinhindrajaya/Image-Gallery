import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/name.png';

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-[#89d35e]'> 
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '50px'}} />
        </div>

        {/* Dekstop Menu */}
        <ul className='hidden md:flex'>
                <li>
                    <a href="">Home</a>
                </li>
            </ul>

        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                {' '}
                <a href="">Home</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar