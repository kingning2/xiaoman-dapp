import React from "react";
import { FaGithub } from "react-icons/fa";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white shadow-md">
      {/* Left Section: Logo and App Name */}
      <div className="flex items-center">
        {/* Replace with your actual logo component or image */}
        <div className="w-8 h-8 bg-blue-500 rounded-full mr-2 flex items-center justify-center text-sm font-bold">
          X
        </div>
        <span className="text-xl font-semibold">Xiaoman DApp</span>
      </div>

      {/* Right Section: Connect Wallet Button and GitHub Link */}
      <div className="flex items-center space-x-4 gap-4">
        <ConnectButton />
        <a
          href="https://github.com/your-github-repo" // Replace with your actual GitHub repository URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          {/* Simple GitHub icon placeholder, replace with an actual SVG icon if desired */}
          <FaGithub size={32} />
        </a>
      </div>
    </header>
  );
};

export default Header;
