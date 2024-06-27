import { Link } from "react-router-dom";
import Line from "../Line";
import * as S from "./style";
import { useScreenWidth } from "../../Hooks/useScreenWidth";

const NavBar = () => {
  const { isSmallScreen } = useScreenWidth();

  //https://freefrontend.com/css-hamburger-menu-icons/
  //https://codepen.io/Danilo06/pen/PoNNvGm

  return (
    <S.HeaderContainer>
      {isSmallScreen ? (
        <>
          <nav className="mobile-layout"></nav>
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
