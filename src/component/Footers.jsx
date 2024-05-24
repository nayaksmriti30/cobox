import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

function Footers() {
  return (
    <Footer bgDark className="rounded-none bg-[#14181d]">
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-8 py-8 md:grid-cols-5">
          <div className="col-span-2">
          <Footer.Brand href="https://flowbite-react.com">
            <img
              src="/favicon.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            
          </Footer.Brand>
          <span className="self-center text-sm font-normal text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </span>
          </div>
          <div >
            <Footer.Title title="help center " />
            <Footer.LinkGroup col className="text-white">
              <Footer.Link href="#">Discord Server</Footer.Link>
              <Footer.Link href="#">Twitter</Footer.Link>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
         
          <div>
            <Footer.Title title="Social Links" />
            <Footer.LinkGroup row className="gap-5 ">
              <Footer.Icon href="#" icon={BsFacebook} className="text-white"/>
              <Footer.Icon href="#" icon={BsInstagram} className="text-white"/>
              <Footer.Icon href="#" icon={BsTwitter} className="text-white"/>
              <Footer.Icon href="#" icon={BsGithub} className="text-white"/>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
    </Footer>
  );
}
export default Footers;
