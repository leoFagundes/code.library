import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  z-index: 3;
  height: ${({ theme }) => theme.pageTopPadding};
  box-sizing: border-box;

  ul {
    display: flex;
    justify-content: center;
    padding: 0;

    li {
      display: flex;
      justify-content: center;
      list-style-type: none;
    }
  }

  .desktop-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 90%;

    ul {
      position: absolute;
      right: 10px;

      li {
        position: relative;

        &::before {
          content: "";
          position: absolute;
          bottom: -1px;
          width: 0%;
          height: 1px;
          background-color: ${({ theme }) => theme.textColor};
          transition: width 0.5s ease;
        }

        &:hover::before {
          width: 60%;
        }
      }
    }
  }

  .mobile-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    padding: 40px;
    background-color: ${({ theme }) => theme.primaryColor};
    backdrop-filter: blur(5px);
    transform: translateX(-100vw);
    box-sizing: border-box;
    border-right: 1px solid ${({ theme }) => theme.textColor};

    &.is-open {
      animation: slideRight 0.7s ease-in-out forwards;

      h2 {
        opacity: 0;
        animation: shadeIn 0.7s ease-in-out forwards 0.5s;
      }

      ul {
        opacity: 0;
        animation: shadeIn 0.7s ease-in-out forwards 0.5s;
      }
    }

    &.is-close {
      animation: slideLeft 0.7s ease-in-out forwards;

      h2 {
        opacity: 1;
        animation: shadeOut 0.3s ease-in-out forwards;
      }

      ul {
        opacity: 1;
        animation: shadeOut 0.3s ease-in-out forwards;
      }
    }
  }

  .hamburguer-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 70px;
    cursor: pointer;
    scale: 0.4;
    z-index: 2;

    span {
      background: #fff;
      border-radius: 10px;
      height: 7px;
      margin: 7px 0;
      transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

      &:nth-of-type(1) {
        width: 50%;
      }

      &:nth-of-type(2) {
        width: 100%;
      }

      &:nth-of-type(3) {
        width: 75%;
      }
    }

    input[type="checkbox"] {
      display: none;
    }

    input[type="checkbox"]:checked ~ span:nth-of-type(1) {
      transform-origin: bottom;
      transform: rotatez(45deg) translate(8px, 0px);
    }

    input[type="checkbox"]:checked ~ span:nth-of-type(2) {
      transform-origin: top;
      transform: rotatez(-45deg);
    }

    input[type="checkbox"]:checked ~ span:nth-of-type(3) {
      transform-origin: bottom;
      width: 50%;
      transform: translate(30px, -11px) rotatez(45deg);
    }
  }

  @keyframes slideRight {
    0% {
      transform: translateX(-100vw);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slideLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100vw);
    }
  }

  @keyframes shadeIn {
    0% {
      transform: translateY(-20px);
      opacity: 0;
      filter: blur(5px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes shadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      filter: blur(5px);
    }
  }
`;
