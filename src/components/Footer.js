import React from "react";

function Footer() {
  return (
    <div className="flex flex-col items-center p-10">
      <div>
        <ul className="flex gap-4 text-2xl">
          <li>
            <i className="fa-brands fa-linkedin"></i>
          </li>
          <li>
            <i className="fa-brands fa-github"></i>
          </li>
        </ul>
      </div>
      <div className="text-sm text-center">
        mukul &copy; {new Date().getFullYear()}. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
