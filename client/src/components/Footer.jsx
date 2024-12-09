// footer of the whole pages
// add btn here insted of imges on fotter diff social media icons

import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <img src={assets.logo} alt="logo" width={150} />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @AbhishekJain.dev | All right reserved.{" "}
      </p>
      <div className="flex gap-2.5">
        <img
          className="hover:scale-105 transition-all duration-500"
          src={assets.facebook_icon}
          alt="facebook"
          width={35}
        />
        <img
          hover:scale-105
          transition-all
          duration-500
          src={assets.instagram_icon}
          alt="instagram"
          width={35}
        />
        <img
          className="hover:scale-105 transition-all duration-500"
          src={assets.twitter_icon}
          alt="twitter"
          width={35}
        />
      </div>
    </div>
  );
};

export default Footer;
