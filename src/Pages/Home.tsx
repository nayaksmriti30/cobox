import React from "react";
import Header from "../component/Header";
import { Projects } from "../component/Projects";
import Hero from "../component/Hero";
import Footers from "../component/Footers";

// import Parallax from "../component/Demo";
import { GameMaker } from "../component/GameMaker";
import { Faq } from "../component/Faq";
import { Demo } from "../component/Demo";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const content = [
  {
    title: "Collaborative ",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full rounded-full flex items-center justify-center text-white">
        <img src="/svg1.png" alt="" className="w-[400px] ease-out duration-300 scale-125" />
      </div>
    ),


  },
  {
    title: "Experience",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="  w-full rounded-full  flex items-center justify-center text-white ">
        <img src="/svg2.png" alt="" className="w-[300px] ease-out duration-300  scale-105" />
      </div>
    ),
  },
  {
    title: "Influence",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full  w-full rounded-full flex items-center justify-center text-white ">
        <img src="/svg1.png" alt="" className="w-[400px] ease-out duration-300  scale-105" />
      </div>
    ),
  },
  {
    title: "Expertise",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full  w-full rounded-full  flex items-center justify-center text-white">
        <img src="/svg2.png" alt="" className="w-[300px] ease-out duration-300  scale-105" />
      </div>
    ),
  },
];
const tabs = [
  {
    title: "Product",
    value: "product",
    content: (
      <div className="w-full h-full overflow-hidden relative rounded-xl shadow-2xl">

        <video
          className="absolute w-full h-full object-cover "
          autoPlay
          loop
          muted
        >
          <source src="/videoDemo.mp4" type="video/mp4" />
        </video>
      </div>
    ),
  },
  {
    title: "Services",
    value: "services",
    content: (
      <div className="w-full h-full overflow-hidden relative rounded-none shadow-2xl">

        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/videoDemo.mp4" type="video/mp4" />
        </video>
      </div>
    ),
  },
  {
    title: "Playground",
    value: "playground",
    content: (
      <div className="w-full h-full overflow-hidden relative rounded-none shadow-2xl">

        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/videoDemo.mp4" type="video/mp4" />
        </video>
      </div>
    ),
  },
  {
    title: "Content",
    value: "content",
    content: (
      <div className="w-full h-full overflow-hidden relative rounded-none shadow-2xl">

        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/videoDemo.mp4" type="video/mp4" />
        </video>
      </div>
    ),
  },
  {
    title: "Random",
    value: "random",
    content: (
      <div className="w-full h-full overflow-hidden relative rounded-none shadow-2xl">

        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/videoDemo.mp4" type="video/mp4" />
        </video>
      </div>
    ),
  },
];
const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <div className=" overflow-hidden relative h-[400px] text-xl md:text-4xl shadow-xl">

        <video
          className="absolute h-full object-cover w-full "
          autoPlay
          loop
          muted
        >
          <source src="/meta.mp4" type="video/mp4" />
        </video>
      </div>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <div className=" overflow-hidden relative h-[400px] text-xl md:text-4xl shadow-xl">

        <video
          className="absolute h-full object-cover w-full "
          autoPlay
          loop
          muted
        >
          <source src="/meta.mp4" type="video/mp4" />
        </video>
      </div>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <div className=" overflow-hidden relative h-[400px] text-xl md:text-4xl shadow-xl">

        <video
          className="absolute h-full object-cover top-0 w-full"
          autoPlay
          loop
          muted
        >
          <source src="/videoDemo.mp4" type="video/mp4" />
        </video>
      </div>
    ),
  },
];
function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="h-[28rem] flex mt-12 justify-center shadow-inner mb-2">
        <Demo items={CARDS} />
      </div>

      <div>
        <GameMaker tabs={tabs} />
      </div>
      

      <div>
        <Projects content={content} />
      </div>

      <Faq header={undefined} />
      <div>
        <Footers />
      </div>
    </div>
  );
}

export default Home;
