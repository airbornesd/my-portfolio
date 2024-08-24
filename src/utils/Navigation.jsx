import React, { useState } from 'react';
import myResume from '../assets/myResume.pdf';
import Tagline from './Project';

const Navigation = () => {
  const [showTagline, setShowTagline] = useState(false);

  const handleShowTagline = () => {
    setShowTagline(true);
    setTimeout(() => {
      setShowTagline(false);
    }, 3000);
  };

  const NavItem = ({ link, label, onClick }) => (
    <li className="flex items-center space-x-2">
      <a
        href={link}
        className="text-white hover:text-blue-400 flex items-center"
        target={label === 'resume' ? "_blank" : link.startsWith('http') ? "_blank" : "_self"}
        rel="noopener noreferrer"
        onClick={onClick}
      >
        <span>{label}</span>
      </a>
    </li>
  );

  return (

    <nav>
      <Tagline trigger={showTagline} />
      <ul className="flex space-x-4">
        <NavItem link="https://www.linkedin.com/in/siddharthdhakaa/" label="linkedin" />
        <NavItem link="https://x.com/airbornesd" label="x" />
        <NavItem link="https://github.com/airbornesd" label="github" />
        <NavItem link={myResume} label="resume" />
        <NavItem link="#" label="projects" onClick={(e) => {
          e.preventDefault();
          handleShowTagline();
        }} />
      </ul>
    </nav>

  );
};

export default Navigation;
