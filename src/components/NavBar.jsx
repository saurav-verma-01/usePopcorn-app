import Logo from "./NavBarComponents/Logo";
import Search from "./NavBarComponents/Search";

const NavBar = ({ children }) => {
  return (
    <nav className="nav-bar">
      <Logo />

      {children}
    </nav>
  );
};

export default NavBar;
