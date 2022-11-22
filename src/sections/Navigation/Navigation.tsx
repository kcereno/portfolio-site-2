import { MdOutlineModeNight, MdOutlineLightMode } from 'react-icons/md';
import './Navigation.scss';

interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function Navigation({ darkMode, toggleDarkMode }: Props) {
  return (
    <div className="nav pt-sm mb-xl ">
      <div>{/* Used to help align other elems in flexbox */}</div>
      <div className="nav-links ">
        <a className="nav-link" href="/">
          Home
        </a>
        <a className="nav-link" href="/">
          About
        </a>
        <a className="nav-link" href="/">
          Projects
        </a>
        <a className="nav-link" href="/">
          Contact
        </a>
      </div>
      <div className="theme-icon-container mx-md">
        {darkMode ? (
          <MdOutlineModeNight className="theme-icon" onClick={toggleDarkMode} />
        ) : (
          <MdOutlineLightMode className="theme-icon" onClick={toggleDarkMode} />
        )}
      </div>
    </div>
  );
}

export default Navigation;