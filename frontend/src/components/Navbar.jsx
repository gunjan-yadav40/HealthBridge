import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">

      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt=""
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li>HOME</li>
        </NavLink>

        <NavLink to="/doctors">
          <li>ALL DOCTORS</li>
        </NavLink>

        <NavLink to="/about">
          <li>ABOUT</li>
        </NavLink>

        <NavLink to="/contact">
          <li>CONTACT</li>
        </NavLink>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">

            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt=""
            />

            <img
              className="w-2.5"
              src={assets.dropdown_icon}
              alt=""
            />

            {/* Dropdown */}
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>

                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>

                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}

        {/* Mobile Menu Button */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />

      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          showMenu ? "fixed" : "hidden"
        } md:hidden inset-0 z-50 bg-white`}
      >

        <div className="flex items-center justify-between px-5 py-6 border-b">

          <img
            className="w-36"
            src={assets.logo}
            alt=""
          />

          <img
            onClick={() => setShowMenu(false)}
            className="w-7 cursor-pointer"
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <ul className="flex flex-col items-center gap-6 mt-10 text-lg font-medium">

          <NavLink
            to="/"
            onClick={() => setShowMenu(false)}
          >
            HOME
          </NavLink>

          <NavLink
            to="/doctors"
            onClick={() => setShowMenu(false)}
          >
            ALL DOCTORS
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setShowMenu(false)}
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setShowMenu(false)}
          >
            CONTACT
          </NavLink>

        </ul>
      </div>

    </div>
  );
};

export default Navbar;
