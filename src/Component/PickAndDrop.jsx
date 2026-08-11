import React from 'react'
import img from '../assets/Location.png'
import img2 from '../assets/Calendar.png'
import { FaArrowRight } from "react-icons/fa";
import PickCard from './PickCard';


const PickAndDrop = () => {
  return (
    <div>
      <div className="container ">
        <div className="flex items-center justify-between py-7.5 px-6  rounded-2xl bg-[#E7E7E7] text-black ">
          <PickCard
            className="w-71 "
            title="Pick-up Location"
            image={img}
            heading="Search a location"
          />
          <PickCard
            className="w-45 "
            title="Pick-up date"
            image2={img2}
            heading="12/12/2023"
          />
          <PickCard
            className="w-71 "
            title="Drop-off Location"
            image={img}
            heading="Search a location"
          />
          <PickCard
            className="w-45 "
            title="Pick-off date"
            image2={img2}
            heading="12/12/2023"
          />
          <button className={` py-4 px-6 rounded-[64px] text-white mt-8 bg-primary flex items-center gap-2 `}>
        
            Find a Vehicle <FaArrowRight />
          </button>
        </div>
      </div>

    </div>
  );
}

export default PickAndDrop
