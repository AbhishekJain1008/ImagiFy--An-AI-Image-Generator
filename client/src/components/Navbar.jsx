import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  // taken the states from the assects.jsx
  const { user } = useContext(AppContext);

  //  for navigation when click on btn
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4">
      {/* Click on logo transfer to home page */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-28 sm:w-32 lg:w-40" />
      </Link>

      <div>
        {/* Check whether it is login / logout user */}
        {/*First div For login user and 2nd div for logged out user */}
        {user ? (
          // when user is available(login)
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => {
                navigate("/buy");
              }}
              className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700"
            >
              <img
                className="w-5"
                src={assets.credit_star}
                alt="No of Credits"
              />
              <p className="text-xs sm:text-sm font-medium text-gray-650">
                Credit left: 50
              </p>
            </button>
            <p className="text-gray-650 max-sm:hidden pl-4">Hi,Abhishek </p>

            {/* Profile icon  when hover on that it display logout btn*/}
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="user"
                className="w-10 drop-shadow"
              />

              {/* hidden by default but visible when hover*/}
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10">LogOut</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p className="cursor-pointer" onClick={() => navigate("/buy")}>
              Pricing
            </p>
            <button className="bg-zinc-800 text-white px-10 py-2 sm:px-4 text-sm rounded-full">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
