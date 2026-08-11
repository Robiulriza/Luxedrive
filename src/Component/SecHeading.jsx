import React from 'react'

const SecHeading = ({heading,paragraph,className}) => {
  return (
    <div className={` text-primary! mx-auto  ${className}`}>
      <h2 className="text-5xl font-bold text-center tracking-[-2px] ">
        {heading}{" "}
      </h2>
      <p className=" text-center tracking-[-0.2px] mt-6 px-4.5"> {paragraph} </p>
    </div>
  );
}

export default SecHeading
