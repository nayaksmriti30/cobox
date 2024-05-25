import React from "react";
import Header from "../component/Header";
import { Projects } from "../component/Projects";
import Hero from "../component/Hero";
import Footers from "../component/Footers";

// import Parallax from "../component/Demo";
import { GameMaker } from "../component/GameMaker";
import { Faq } from "../component/Faq";
import { Demo } from "../component/Demo";


const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        control
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
const tabs = [
  {
    title: "Product",
    value: "product",
    content: (
      <div className="w-full overflow-hidden relative h-[400px] rounded-none shadow-2xl">

        <video
          className="absolute w-full h-[400px] object-cover"
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
      <div className="w-full overflow-hidden relative h-[600px] rounded-2xl p-10 text-xl md:text-4xl font-bold ">

        <video
          className="absolute w-full h-[400px] object-cover"
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
      <div className="w-full overflow-hidden relative h-[400px] rounded-2xl p-10 text-xl md:text-4xl shadow-xl">

        <video
          className="absolute w-full h-[400px] object-cover"
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
      <div className="w-full overflow-hidden relative h-[400px] rounded-2xl p-10 text-xl md:text-4xl font-bold ">

        <img src="" alt="" />
      </div>
    ),
  },
  {
    title: "Random",
    value: "random",
    content: (
      <div className="w-full overflow-hidden relative h-[400px] rounded-2xl p-10 text-xl md:text-4xl font-bold ">

        <video
          className="absolute w-full h-[400px] object-cover"
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
      <div className="lg:w-[1200px] w-[800px] overflow-hidden relative h-[400px] rounded-2xl  text-xl md:text-4xl shadow-xl">

        <video
          className="absolute object-cover"
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
      <div className="lg:w-[1200px] w-[800px] overflow-hidden relative h-[400px] rounded-2xl text-xl md:text-4xl shadow-xl">

        <video
          className="absolute object-cover"
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
      <div className="lg:w-[1200px] w-[800px] overflow-hidden relative h-[400px] rounded-2xl text-xl md:text-4xl shadow-xl">

        <video
          className="absolute  object-cover top-0"
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
      <div className="h-[28rem] flex mt-12 justify-start xl:ml-40 lg:ml-8 mx-3 w-full">
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
