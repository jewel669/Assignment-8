import React from "react";
import { FaGithub } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Navbar = () => {
  const link = (
    <>
      <Link to='/'><li className="m-2 font-medium">Home</li></Link>
      <Link to='/apps'><li className="m-2 font-medium">Apps</li></Link>
      <Link to='/installation'><li className="m-2 font-medium">Installation</li></Link>
    </>
  );
  return (
    <div>
      <div className="navbar lg:px-20 bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <div className="flex">
            <img className="h-10 w-10" src={logo} alt="" />
            <a className="btn bg-gradient-to-r from-[#632ee3] to-[#9F62F2] bg-clip-text text-transparent text-xl btn-ghost">
              HERO.IO
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/jewel669" className="btn text-white bg-gradient-to-r from-[#632ee3] to-[#9F62F2]">
            <FaGithub />Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
