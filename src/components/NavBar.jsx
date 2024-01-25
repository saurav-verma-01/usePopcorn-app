import Logo from "./NavBarComponents/Logo";
import Search from "./NavBarComponents/Search";
import NumResults from "./NavBarComponents/NumResults";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults />
    </nav>
  );
};

export default NavBar;
