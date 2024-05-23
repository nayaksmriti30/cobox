import React from 'react';
import Bgvideo from '../assets/videoDemo.mp4'; 

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="relative flex flex-col items-center justify-center h-screen text-white overflow-hidden">
       
       <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={Bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to The Cobox</h1>
          <p className="text-lg md:text-2xl mb-6">Create, Own, and Monetize Your Gaming Experiences</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            Get Started
          </button>
        </div>
      
        
        {/* <div  inset-0 bg-black "></div> */}
      </div>

      <div className="  bg-green-200  h-48 flex items-center justify-center ">
        <p className="text-xl">Introduction Section Content Here</p>
      </div>
    </div>
  );
};

export default Hero;

