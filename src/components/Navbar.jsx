import React from "react";
import LoginIcon from "@mui/icons-material/Login";
function Navbar(props) {
  return (
    <div class="navBar flex flex-nowrap bg-white backdrop-blur">
      <div className="navBrand grow mt-10  text-2xl">blogo</div>
      <div className="flex-initial navItem mt-10 mr-10 text-lg">Home</div>
      <div className="flex-initial navItem mt-10 mr-56 text-lg mr-12">
        <LoginIcon />
      </div>
    </div>
  );
}

export default Navbar;
