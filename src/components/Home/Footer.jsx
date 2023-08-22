import React from 'react'

const Footer = () => {
  return (
    <>
       <div className="min-h-[300px] bg-black/90 p-10 text-white ">
        <p className='my-10 text-lg'>Read about Netfpx TV shows and movies and watch bonus videos on Tudum.com.</p>
        <div className='flex text-lg '>
            <div className='mr-[180px] cursor-pointer'>
                <p>FAQ</p>
                <p>Investor Relations</p>
                <p>Privacy</p>
                <p>Speed Test</p>
            </div>
            <div className='mr-[180px] cursor-pointer'>
                <p>Help Centre</p>
                <p>Jobs</p>
                <p>Cookie Preferences</p>
                <p>Legal Notices</p>
            </div>
            <div className='mr-[180px] cursor-pointer'>
                <p>Account</p>
                <p>Ways to Watch</p>
                <p>Corporate Information</p>
                <p>Only on Netfpx</p>
            </div>
            <div className='mr-[180px] cursor-pointer'>
                <p>Media Centre</p>
                <p>Terms of Use</p>
                <p>Contact Us</p>
                <p>Others</p>
            </div>
        </div>
        <input
            type="button"
            value="English"
            className="border-[1px] rounded-md p-2 px-10  text-sm font-semibold cursor-pointer text-white my-10"
          />
      </div>
    </>
  )
}

export default Footer
