import React from "react";

export default function Navbar() {
  return (
    <nav className="top-0  w-full h-20  z-10 block p-4 items-center justify-center">
      <div className="flex items-center w-full opacity-90 h-full">
        <div className="h-auto block">
          <h1 className="font-['Rowdies'] text-[2rem] text-white">Spook</h1>
        </div>
        <div className="flex-grow flex items-center justify-center ml-8">
          <a href="/" className="ml-4 text-[1rem] text-white">
            Blueprint
          </a>
          <a href="/" className="ml-4 text-[1rem] text-white">
            Testing
          </a>
          <a href="/" className="ml-4 text-[1rem] text-white">
            Check
          </a>
          <a href="/" className="ml-4 text-[1rem] text-white">
            About
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a href="/" target="_blank">
            <img
              src="https://spooks.land/static/twitter.svg"
              alt="twitter"
              className="overflow-clip h-8 mr-4"
            />
          </a>
          <a href="/" target="_blank">
            <img
              src="https://spooks.land/static/discord.svg"
              alt="discord"
              className="overflow-clip h-8"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
