import React from 'react'
import logo from '../../assets/Logo/netflix logo.png'

const Header = () => {
  return (
    <>
     <div className='min-h-screen bg-black' style="background-image: url('https://www.pexels.com/photo/woman-standing-in-front-of-sea-1440399/')">
     <div className=' flex justify-between items-center p-4'  >
        <div>
            <img src={logo} alt="image" className='w-[150px] ml-10 '/>
        </div>
        <div className=''>
           <input type="button" value="English" className='border-2 rounded-md  px-4 mx-8 py-1 text-sm font-semibold cursor-pointer' />
           <input type="button" value="Sign In" className='bg-red-600 px-2 py-1 rounded-md font-semibold text-white text-sm tracking-wide cursor-pointer mr-10' />
        </div>        

     </div>
     </div>
    </>
  )
}

export default Header
