import React from "react";

const BrandCard = ({image,brandName}) => {
  return (
    <div className="w-46.5 h-30 bg-[#0f0f0f08]  rounded-lg flex flex-col justify-center items-center gap-3 ">
      <div><img src={image} alt="" /></div>
      <h6 className=" font-medium leading-6 ">{brandName}</h6>
    </div>
  );
};

export default BrandCard;
