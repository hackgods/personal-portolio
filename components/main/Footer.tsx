import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { personalData } from "@/constants";

const Footer = () => {
  return (
    <footer className="text-white w-full snap-always snap-start p-2">
      <nav className="flex flex-wrap justify-center py-4 gap-6">

        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] text-white hover:text-gray-300">
          <RxGithubLogo />
          <span className="text-[15px] ml-[6px]">Github</span>
        </a>
        
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] text-white hover:text-gray-300">
          <RxGithubLogo />
          <span className="text-[15px] ml-[6px]">Twitter</span>
        </a>
        
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] text-white hover:text-gray-300">
          <RxLinkedinLogo />
          <span className="text-[15px] ml-[6px]">LinkedIn</span>
        </a>
        
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] text-white hover:text-gray-300">
          <FaInstagram />
          <span className="text-[15px] ml-[6px]">Instagram</span>
        </a>

      </nav>
      <div className="mb-[20px] text-md text-center">
        {personalData.fName} {personalData.lName} {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
