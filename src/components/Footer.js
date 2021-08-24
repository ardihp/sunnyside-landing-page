import React from "react";
import logo from "../assets/logo.svg";
import instagram from "../assets/icon-instagram.svg";
import facebook from "../assets/icon-facebook.svg";
import pinterest from "../assets/icon-pinterest.svg";
import twitter from "../assets/icon-twitter.svg";

function Footer() {
  return (
    <div>
      <div className="bg-green-300 flex flex-col justify-center items-center py-20">
        <img
          src={logo}
          alt={"logo"}
          className="w-40 filter invert opacity-50"
        />
        <ul className="mt-7 flex font-barlow text-green-700">
          <li className=" cursor-pointer hover:text-white">About</li>
          <li className="px-10 cursor-pointer hover:text-white">
            Services
          </li>
          <li className=" cursor-pointer hover:text-white">Projects</li>
        </ul>
        <ul className="flex mt-14">
          <li className="px-3">
            <img className="cursor-pointer" src={facebook} alt={"facebook"} />
          </li>
          <li className="px-3">
            <img className="cursor-pointer" src={instagram} alt={"instagram"} />
          </li>
          <li className="px-3">
            <img className="cursor-pointer" src={twitter} alt={"twitter"} />
          </li>
          <li className="px-3">
            <img className="cursor-pointer" src={pinterest} alt={"pinterest"} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
