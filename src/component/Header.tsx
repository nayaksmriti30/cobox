import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

function Header() {
  return (
    <div>
      <div>
      <Navbar fluid className="bg-[#14181d] text-white ">
        <div className="flex items-center !justify-start">
          <Navbar.Brand href="https://flowbite-react.com">
            <img
             src="/logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
          </Navbar.Brand>

          <Navbar.Collapse className="button-nav ml-4 ">
            <div className="dropdown">
              <button className="dropbtn">Projects</button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <Navbar.Link
              href="#"
              className="text-[#dee0e2] mr-5 font-normal"
            >
              AI Yodha
            </Navbar.Link>
            <Navbar.Link href="#" className="text-[#dee0e2] mr-5 font-normal">
              Blogs
            </Navbar.Link>
            <Navbar.Link href="#" className="text-[#dee0e2] mr-5 font-normal">
              Join Us
            </Navbar.Link>
            <Navbar.Link href="#" className="text-[#dee0e2] mr-5 font-normal">
              Events
            </Navbar.Link>
            <Navbar.Link href="#" className="text-[#dee0e2] mr-5 font-normal">
              WhitePaper
            </Navbar.Link>
          </Navbar.Collapse>
        </div>
        <div className="flex items-center justify-end">
          <h3>Demo</h3>
          <Navbar.Toggle />
        </div>
      </Navbar>
      </div>
    </div>
  );
}

export default Header;
