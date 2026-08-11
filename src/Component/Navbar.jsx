import React from 'react'
import img1 from '../assets/Frame.png'
import img2 from '../assets/Heading.png'

const Navbar = () => {
  return (
    <div className=" text-white  ">
      <div className="container ">
        <nav className="flex justify-between items-center py-8 ">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <button className=" font-semibold leading-6 py-2 px-5 border border-[#ffffff53]  rounded-[48px] ">
            Login / Register
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar

