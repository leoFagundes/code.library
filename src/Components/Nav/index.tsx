import { Link } from "react-router-dom";
import Line from "../Line";
import * as S from "./style";
import { useScreenWidth } from "../../Hooks/useScreenWidth";
import { useState } from "react";

const NavBar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean | null>(null);
  const { isSmallScreen } = useScreenWidth();

  const handleToggleNavbar = (e: React.MouseEvent<HTMLLabelElement>) => {
    if (e.target instanceof HTMLInputElement) {
      setIsNavbarOpen(!isNavbarOpen);
    }
  };

  return (
    <S.HeaderContainer>
      {isSmallScreen ? (
        <>
          <label
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
            className={`mobile-layout  ${
              isNavbarOpen !== null ? (isNavbarOpen ? "isOpen" : "isClose") : ""
            }`}
          >
            <h2>
              <Link to={"/"}>Code.Library</Link>
            </h2>
            <ul>
              <li>
                <Link to={"/"}>Library</Link>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <>
          <nav className="desktop-layout">
            <h2>
              <Link to={"/"}>Code.Library</Link>
            </h2>
            <ul>
              <li>
                <Link to={"/"}>Library</Link>
              </li>
            </ul>
          </nav>
          <Line margintop="8px" absolute="true" bottom="0" />
        </>
      )}
    </S.HeaderContainer>
  );
};

export default NavBar;
