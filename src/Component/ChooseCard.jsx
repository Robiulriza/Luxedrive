import React from "react";

const ChooseCard = ( {image,heading,paragraph}) => {
  return (
    <div className="w-full rounded-tl-[20px] rounded-tr-[20px] border border-[#00000014] rounded-bl-3xl flex items-center gap-5 rounded-br-3xl bg-[#ffff] p-8 ">
      <div className=" bg-[#F5F5F5] rounded-2xl px-3.75 py-10 ">
        <img src={image} alt="" />
      </div>
      <div>
        <h3 className=" font-bold text-2xl "> {heading} </h3>
        <p className=" text-lg mt-3 "> {paragraph} </p>
      </div>
    </div>
  );
};

export default ChooseCard;
