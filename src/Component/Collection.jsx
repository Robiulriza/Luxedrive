import React from "react";
import SecHeading from "./SecHeading";
import CollectionCard from "./CollectionCard";
import firstCar from "../assets/firstCar.png";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";
import car5 from "../assets/car5.png";
import { FaArrowRight } from "react-icons/fa";


const Collection = () => {


  return (
    <div className="py-25 border-b bg-[#F5F5F5] ">
      <div className="container">
        <SecHeading
          heading="Our Impressive Collection of Cars"
          className="w-182"
          paragraph="Ranging from elegant sedans to powerful sports cars, all carefully selected to provide our customers with the ultimate driving experience."
        />

        <div className=" flex justify-center items-center gap-4 mt-12 mb-16 ">
          <button className="px-6 py-3 rounded-full border border-[#d1d5db] bg-white text-sm font-semibold text-[#111827] transition hover:border-black hover:bg-black hover:text-white">Popular Car</button>
          <button className="px-6 py-3 rounded-full border border-[#d1d5db] bg-white text-sm font-semibold text-[#111827] transition hover:border-black hover:bg-black hover:text-white">Vintage Car</button>
          <button className="px-6 py-3 rounded-full border border-[#d1d5db] bg-white text-sm font-semibold text-[#111827] transition hover:border-black hover:bg-black hover:text-white">Family Car</button>
          <button className="px-6 py-3 rounded-full border border-[#d1d5db] bg-white text-sm font-semibold text-[#111827] transition hover:border-black hover:bg-black hover:text-white">Off-Road Car</button>
        </div>

        <div className=" flex flex-wrap justify-between gap-y-8">
          <CollectionCard image={firstCar} title="Audi A8 L 2022" />
          <CollectionCard image={car1} title="Nissan Maxima Platinum 2022" />
          <CollectionCard image={car2} title="Porsche Cayenne GTS 2022" />
          <CollectionCard image={car3} title=" BMW M8 Coupe 2022 " />
          <CollectionCard image={car4} title=" BMW X7 M50i 2022 " />
          <CollectionCard image={car5} title=" Porsche Cayenne GTS 2022 " />
        </div>
        <div className=" flex justify-center mt-16">
            <button className=" px-10 py-4  text-center  bg-black flex items-center gap-2 font-bold rounded-full text-white cursor-pointer">
          See all Cars <FaArrowRight />
        </button>
        </div>
      
      </div>
    </div>
  );
};

export default Collection;
