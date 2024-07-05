import React from "react";

export default function Header() {

  const deviceWidth = window.innerWidth;
  console.log(deviceWidth);

  return (
    <header className="navbar bg-transparent shadow-xl shadow-gray-900">
        <div className="flex justify-center w-full">
            <ul className="flex text-neutral-300 gap-5">
              <li className="hover:text-neutral-100 hover:cursor-pointer">Home</li>
              <li className="hover:text-neutral-100 hover:cursor-pointer">About Me</li>
              <li className="hover:text-neutral-100 hover:cursor-pointer">Skills</li>
              <li className="hover:text-neutral-100 hover:cursor-pointer">Projects</li>
              <li className="hover:text-neutral-100 hover:cursor-pointer">Experience</li>
              <li className="hover:text-neutral-100 hover:cursor-pointer">Education</li>
            </ul>
        </div>
    </header>
  );
}
