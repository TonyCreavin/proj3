import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaHome } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';
import { CiFaceSmile } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';

export default function Navbar() {
  return (
    <div className="h-[7%] w-full bg-white">
      <div className="flex justify-end ">
        <button type="button" className="font-sans text-xs mr-2">
          FR
        </button>{' '}
        <button type="button" className="font-sans text-xs mr-2">
          EN
        </button>{' '}
        <button type="button" className="font-sans text-xs mr-2">
          ES
        </button>
      </div>
      <div className="flex flex-row justify-between mt-2 mr-2">
        <h1 className="font-bold font-sans ml-2 text-3xl">
          make
          <button
            type="button"
            aria-label="logo design"
            className="border-solid h-2 w-3 bg-yellow-400 rounded-t-lg"
          />
          sense
        </h1>
        <div className=" xs:hidden sm:hidden  md:flex flex-col justify-center align-middle items-center ">
          <FaHome />
          <p className="text-xs">Accuieil</p>
        </div>
        <div className="sm:hidden  md:flex flex-col justify-center align-middle items-center ">
          <AiOutlineCalendar />
          <p className="text-xs">Mes Décisions</p>
        </div>
        <div className="sm:hidden md:flex flex-col justify-center align-middle items-center ">
          <CiFaceSmile />
          <p className="text-xs">Notifications</p>
        </div>
        <div className="h-10 w-10 flex flex-row">
          <RxHamburgerMenu size={40} />
          <CgProfile size={40} />
        </div>
      </div>
    </div>
  );
}
