import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <span className='special-char'>
          <b>D</b>
        </span>
        <TypeAnimation
          sequence={["urgesh.", 2000, "evloper.", 2000, "esigner.", 2000]}
          wrapper='span'
          speed={20}
          style={{ display: "inline-block" }}
          repeat={Infinity}
          cursor={false}
        />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
