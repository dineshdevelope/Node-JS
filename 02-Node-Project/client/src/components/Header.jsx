import React from "react";

const Header = () => {
  return (
    <div>
      <ul className="flex bg-blue-500 justify-end space-x-7 p-5">
        <li className="bg-white rounded p-2 hover:bg-blue-200 hover:text-white font-semibold cursor-pointer">
          Home
        </li>
        <li className="bg-white rounded p-2 hover:bg-blue-200 hover:text-white font-semibold cursor-pointer">
          GitHub
        </li>
        <li className="bg-white rounded p-2 hover:bg-blue-200 hover:text-white font-semibold cursor-pointer">
          About
        </li>
      </ul>
    </div>
  );
};

export default Header;
