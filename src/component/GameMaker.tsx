import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const GameMaker = ({ tabs: propTabs }: { tabs: Tab[] }) => {
  return (
    <div className=" ">
      <div className="w-full bg-[#000] ">
        <div className="flex flex-row items-center sm:justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full mt-4 ">
          <Tabs className="w-full text-center pb-4">
            <TabPanel className="tabpanel bg-slate-300">
              <div className="w-full h-full overflow-hidden relative shadow-[#cecccc] shadow-2xl">
                <video
                  className="absolute w-full h-full object-cover "
                  autoPlay
                  loop
                  muted
                >
                  <source src="/videoDemo.mp4" type="video/mp4" />
                </video>
              </div>
            </TabPanel>
            <TabPanel className="tabpanel bg-slate-300">
              <div className="w-full h-full overflow-hidden relative rounded-xl shadow-[#cecccc] shadow-2xl">
                <video
                  className="absolute w-full h-full object-cover "
                  autoPlay
                  loop
                  muted
                >
                  <source src="/videoDemo.mp4" type="video/mp4" />
                </video>
              </div>
            </TabPanel>
            <TabPanel className="tabpanel bg-slate-300">
              <div className="w-full h-full overflow-hidden relative rounded-xl shadow-[#cecccc] shadow-2xl">
                <video
                  className="absolute w-full h-full object-cover "
                  autoPlay
                  loop
                  muted
                >
                  <source src="/videoDemo.mp4" type="video/mp4" />
                </video>
              </div>
            </TabPanel>
            <TabPanel className="tabpanel bg-slate-300">
              <div className="w-full h-full overflow-hidden relative rounded-xl shadow-[#cecccc] shadow-2xl">
                <video
                  className="absolute w-full h-full object-cover "
                  autoPlay
                  loop
                  muted
                >
                  <source src="/videoDemo.mp4" type="video/mp4" />
                </video>
              </div>
            </TabPanel>

            <TabList>
              <Tab>Product</Tab>
              <Tab>Source</Tab>
              <Tab>Home</Tab>
              <Tab>Games</Tab>
            </TabList>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

// export const FadeInDiv = (
//     return (
//       <div className="relative w-full h-full">
//         {tabs.map((tab, idx) => (

//                   <Tabs>

//                     <TabPanel className="tabpanel bg-slate-300">
//                       <h2>{tab.content}</h2>
//                     </TabPanel>

//                     <TabList>
//                       <Tab>{tab.title}</Tab>

//                     </TabList>
//                   </Tabs>

//               )
//          ) }

//       </div>
//     );
//   };
