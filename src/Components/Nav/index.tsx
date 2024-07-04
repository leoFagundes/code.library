import { Link, useLocation } from "react-router-dom";
import Line from "../Line";
import * as S from "./style";
import { useScreenWidth } from "../../Hooks/useScreenWidth";
import { useEffect, useRef, useState } from "react";

const NavBar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean | null>(null);
  const { isSmallScreen } = useScreenWidth();
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (isNavbarOpen !== null) {
      navRef.current?.classList.remove("isOpen");
      setIsNavbarOpen(false);
    }
  }, [location]);

  const handleToggleNavbar = (e: React.MouseEvent<HTMLLabelElement>) => {
    if (e.target instanceof HTMLInputElement) {
      setIsNavbarOpen(!isNavbarOpen);
    }
  };

  const mobileNavBarTemplate = () => (
    <>
      <label
        data-testid="hamburguer-menu"
        onClick={handleToggleNavbar}
        className={`hamburguer-menu`}
        htmlFor="check"
      >
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav
        data-testid="nav-bar"
        ref={navRef}
        className={`mobile-layout  ${
          isNavbarOpen !== null ? (isNavbarOpen ? "is-open" : "is-close") : ""
        }`}
      >
        <h2>
          <Link to={"/"}>Code.Library</Link>
        </h2>
        <ul>
          <li>
            <Link to={"/library"}>Library</Link>
          </li>
        </ul>
      </nav>
    </>
  );

  const desktopNavBarTemplate = () => (
    <>
      <nav data-testid="nav-bar" className="desktop-layout">
        <h2>
          <Link to={"/"}>Code.Library</Link>
        </h2>
        <ul>
          <li>
            <Link to={"/library"}>Library</Link>
          </li>
        </ul>
      </nav>
      <Line margintop="8px" absolute="true" bottom="0" />
    </>
  );

  return (
    <S.HeaderContainer>
      {isSmallScreen ? mobileNavBarTemplate() : desktopNavBarTemplate()}
    </S.HeaderContainer>
  );
};

export default NavBar;
