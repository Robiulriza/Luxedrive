import React from 'react'

const PickCard = ({ className, image, title, heading,image2 }) => {
  return (
    <div className={`${className}`}>
      <h5> {title}</h5>
      <div className="flex items-center bg-white rounded-lg gap-3 mt-2.5 p-4 w-full">
        <div>
          <img src={image} />
        </div>
        <div className="flex justify-between items-center w-full ">
          <h4> {heading} </h4>
          <div>
        
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickCard
