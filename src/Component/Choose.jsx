import React from "react";
import SecHeading from "./SecHeading";
import image from "../assets/image-35.png";
import ChooseCard from "./ChooseCard";
import img1 from '../assets/search-lg.png'
import img2 from '../assets/calendar-check-02.png'
import img3 from '../assets/face-happy.png'


const Choose = () => {
  return (
    <div className=" py-25 bg-white">
      <div className="container">
        <SecHeading
          heading="How it woks"
          className="w-170"
          paragraph="Renting a luxury car has never been easier. Our streamlined process makes it simple for you to book and confirm your vehicle of choice online"
        />
        <div className="mt-14  h-159.5   relative ">
          <div className=" w-148.5  top-1/2  -translate-y-1/2  left-0 absolute  z-2 ">
            <div className=" flex flex-col gap-4 ">
              <ChooseCard
                image={img1}
                heading="Browse and select"
                paragraph=" Choose from our wide range of premium cars, select the pickup and return dates and locations that suit you best."
              />
              <ChooseCard
                image={img2}
                heading="Book and confirm"
                paragraph=" Book your desired car with just a few clicks and receive an instant confirmation via email or SMS."
              />
              <ChooseCard
                image={img3}
                heading="Enjoy your ride"
                paragraph="Pick up your car at the designated location and enjoy your premium driving experience with our top-quality service. "
              />
            </div>
          </div>
          <div className=" pt-31.75 pr-11 pb-38 pl-37.75 bg-[#F5F5F5] absolute top-0 right-0 z-1 rounded-3xl w-185 ">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
