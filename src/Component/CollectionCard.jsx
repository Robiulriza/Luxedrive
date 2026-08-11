import React, { useState } from 'react'
import time from "../assets/time.png";
import auto from "../assets/auto.png";
import people from "../assets/people.png";
import electric from "../assets/gas-station.png";
import Countdown from './Countdown';
const CollectionCard = ({
  image,
  title,

}) => {
    const [countdown, setCountdown] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  return (
    <div className=" w-[384.25px] p-2 bg-white hover:border duration-200 hover:shadow-lg shadow-[#0a0a0a59] rounded-[20px] ">
      <Countdown className="hidden" onTimeChange={setCountdown} />
      <img src={image} alt="" className=" mb-2" />
      <div className=" p-4  text-black ">
        <h5 className=" font-semibold text-xl "> {title} </h5>
        <div className="flex py-3.5 ">
          <h3 className=" font-extrabold text-[32px] ">{countdown.days}</h3>

          <p className=" font-semibold text-[#00000052] "></p>
          <span className=" mt-4"> /day </span>
        </div>
        <div className="w-full flex px-4 justify-between py-2 rounded-[16px] bg-[#F6F6F6] ">
          <div className="flex flex-col justify-center   gap-1  items-center w-9 pl-3">
            <div>
              <img src={time} alt="" />
            </div>
            <p className=" text-[14px]  font-medium text-black  ">
              {countdown.hours}:{countdown.minutes}:{countdown.seconds}
              
            </p>
          </div>
          <div className="flex flex-col justify-center   gap-1 items-center ">
            <div>
              <img src={auto} alt="" />
            </div>
            <p className=" text-[14px] font-medium text-black "> Auto </p>
          </div>
          <div className="flex flex-col justify-center  gap-1  items-center ">
            <div>
              <img src={people} alt="" />
            </div>
            <p className=" text-[14px] font-medium text-black "> 4 Person </p>
          </div>
          <div className="flex flex-col justify-center   gap-1 items-center ">
            <div>
              <img src={electric} alt="" />
            </div>
            <p className=" text-[14px] font-medium text-black "> Electric</p>
          </div>
        </div>
        <button className="w-full  py-3 mt-5 hover:bg-black hover:text-white cursor-pointer duration-200 rounded-4xl px-4 border flex justify-center items-center font-semibold ">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CollectionCard
