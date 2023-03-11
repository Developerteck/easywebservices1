import React, { useState } from "react";

function LeftNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDrawer() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="left-navbar">
      <button className="drawer-toggle" onClick={toggleDrawer}>
        Toggle Drawer
      </button>
      <ul className={isOpen ? "open" : ""}>
        <li>
          <a href="#">Menu Item 1</a>
        </li>
        <li>
          <a href="#">Menu Item 2</a>
        </li>
        <li>
          <a href="#">Menu Item 3</a>
        </li>
      </ul>
    </nav>
  );
}

export default LeftNavbar;
