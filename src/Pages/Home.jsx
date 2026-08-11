import React from "react";
import Navbar from "../Component/Navbar";
import Banner from "../Component/Banner";
import Brand from "../Component/Brand";
import Collection from "../Component/Collection";
import Choose from "../Component/Choose";



const Home = () => {
  return (
    <div>
      <div className="bg-black pb-35  ">
        <Navbar />
        <Banner />
      </div>
      <Brand/>
      <Collection/>
      <Choose/>
      </div>
  );
};

export default Home;
