import React from "react";
import { FaArrowRight } from "react-icons/fa";
import BrandCard from "./BrandCard";

import toyota1 from "../assets/Toyota.png";
import ford from "../assets/Ford.png";
import tesla from "../assets/Tesla.png";
import toyota2 from "../assets/TOYOTA2.png";
import toyota3 from "../assets/TOYOTA3.png";
import toyota4 from "../assets/TOYOTA4.png";
import Chevrolet from "../assets/Chevrolet.png";
import BMW from "../assets/BMW.png";
import MercedesBenz from "../assets/Mercedes-Benz.png";
import Hyundai from "../assets/Hyundai.png";
import Audi from "../assets/Audi.png";
import KIA from "../assets/KIA.png";

import SUV from "../assets/SUV.png";
import Crossover from "../assets/Crossover.png";
import Wagon from "../assets/Wagon.png";
import FamilyMBP from "../assets/FamilyMBP.png";
import FamilyMBP2 from "../assets/FamilyMBP2.png";
import Compact from "../assets/Compact.png";
import Coup from "../assets/Coup.png";
import BMW2 from "../assets/BMW2.png";
import Sedan from "../assets/Sedan.png";
import Limousine from "../assets/Limousine.png";


const Brand = () => {
  return (
    <div className="pt-43.5 pb-30.5 bg-white">
      <div className="container">
        {/* Car brand and Name  */}
        <div className="flex justify-between">
          <h4 className=" font-bold text-2xl text-black "> Rent by Brands</h4>
          <button className=" font-semibold flex items-center gap-2 ">
            View all <FaArrowRight />
          </button>
        </div>
        <div className=" mt-6 flex  flex-wrap  justify-between gap-y-4 ">
          <BrandCard image={toyota1} brandName="Toyota " />
          <BrandCard image={ford} brandName="Ford " />
          <BrandCard image={tesla} brandName="Tesla " />
          <BrandCard image={toyota2} brandName="Toyota " />
          <BrandCard image={toyota3} brandName="Toyota " />
          <BrandCard image={toyota4} brandName="Toyota " />
          <BrandCard image={Chevrolet} brandName="Chevrolet " />
          <BrandCard image={BMW} brandName="BMW " />
          <BrandCard image={MercedesBenz} brandName="Mercedes-Benz " />
          <BrandCard image={Hyundai} brandName="Hyundai " />
          <BrandCard image={Audi} brandName="Audi " />
          <BrandCard image={KIA} brandName="KIA " />
        </div>

        {/* Car body  */}
        <div className="flex mt-16 mb-6 justify-between">
          <h4 className=" font-bold text-2xl text-black ">Rent by body type</h4>
          <button className=" font-semibold flex items-center gap-2 ">
            View all <FaArrowRight />
          </button>
        </div>
        <div className=" mt-6 flex  flex-wrap  justify-between gap-y-4 ">
          <BrandCard image={SUV} brandName=" SUV " />
          <BrandCard image={Crossover} brandName=" Crossover " />
          <BrandCard image={Wagon} brandName=" Wagon " />
          <BrandCard image={FamilyMBP} brandName=" Family MBP " />
          <BrandCard image={FamilyMBP2} brandName=" Family MBP " />
          <BrandCard image={Compact} brandName=" Compact" />

          <BrandCard image={Coup} brandName=" Coup" />
          <BrandCard image={BMW2} brandName=" BMW2" />
          <BrandCard image={Sedan} brandName=" Sedan" />
          <BrandCard image={Limousine} brandName=" Limousine" />
          <BrandCard image={BMW2} brandName=" Convertible" />
          <BrandCard image={Coup} brandName=" Crossover" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
