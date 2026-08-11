import React from "react";
import carImg from "../assets/CarImage.png";
import img2 from "../assets/Frame57.png";
import PickAndDrop from "./PickAndDrop";
const Banner = () => {
  return (
    <div >
      <div className="container mt-7 text-white! relative">
        <div className="flex ">
          <div>
            <h1 className="w-167.5 text-[64px]  font-bold ">
              Discover the world on wheels with our car rental service
            </h1>
            <p className="text-lg w-135.25  pt-10 pb-6 border-b border-[#ffffff4f] ">
              Choose from a wide range of cars that fit your style and budget.
              Experience the freedom of the open road with our reliable and
              efficient rental service.
            </p>
            <div className="flex gap-4 items-center mt-4.5  ">
              <div>
                <img src={img2} alt="" />
              </div>
              <h6 className="text-lg">Contact us</h6>
            </div>
          </div>
          <div>
            <img src={carImg} alt="" />
          </div>
        </div>
        <div className=" absolute left-0 -bottom-53 ">
          <PickAndDrop />
        </div>
      </div>
    </div>
  );
};

export default Banner;
