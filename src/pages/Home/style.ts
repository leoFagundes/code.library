import styled from "styled-components";

export const HomeContainer = styled.section<{ isSmallScreen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10px;
  height: 100vh;
  width: 100vw;
  padding-top: ${({ theme }) => theme.pageTopPadding};
  box-sizing: border-box;

  .logo-animation-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.primaryColor};
    z-index: 10;
    animation: shade-out-disabled 5s ease 2s forwards;

    .logo-animation-content {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 100%;
      background: ${(props) => props.theme.primaryRadialGradientBackground};

      svg {
        scale: ${(props) => (props.isSmallScreen ? "0.8;" : "1.2")};
        filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.6));
      }

      #Code-Library {
        path {
          fill-opacity: 0;
          stroke-dasharray: 1 1000;
          stroke-dashoffset: 0;
          stroke-width: 0;
          opacity: 1;
        }

        #c {
          animation: text-animation 2s ease 0s forwards,
            text-fill-sahdeOut 2s ease 4s forwards;
        }
        #o {
          animation: text-animation 2s ease 0.2s forwards,
            text-fill-sahdeOut 2s ease 4s forwards;
        }
        #d {
          animation: text-animation 2s ease 0.4s forwards,
            text-fill-sahdeOut 2s ease 4s forwards;
        }
        #e {
          animation: text-animation 2s ease 0.6s forwards,
            text-fill-sahdeOut 2s ease 4s forwards;
        }
        #dot {
          animation: text-animation 2s ease 0.8s forwards,
            text-fill-sahdeOut 2s ease 4s forwards;
        }
        #l {
          animation: text-animation 2s ease 1s forwards,
            text-fill-sahdeOut 2s ease 4s forwards;
        }
        #i {
          animation: text-animation 2s ease 1.2s forwards,
            text-fill-sahdeOut 2s ease 4s forwards;
        }
        #b {
          animation: text-animation 2s ease 1.4s forwards,
            text-fill-sahdeOut 2s ease 4s forwards;
        }
        #r1 {
          animation: text-animation 2s ease 1.6s forwards,
            text-fill-sahdeOut 2s ease 4s forwards;
        }
        #a {
          animation: text-animation 2s ease 1.7s forwards,
            text-fill-sahdeOut 2s ease 4s forwards;
        }
        #r2 {
          animation: text-animation 2s ease 1.8s forwards,
            text-fill-sahdeOut 2s ease 4s forwards;
        }
        #y {
          animation: text-animation 2s ease 2s forwards,
            text-fill-sahdeOut 2s ease 4s forwards;
        }
      }
    }
  }

  @keyframes text-fill-sahdeOut {
    0% {
      fill-opacity: 0;
      stroke-dasharray: 150 0;
      stroke-dashoffset: 10;
      stroke-width: 1;
      opacity: 1;
    }
    80% {
      fill-opacity: 1;
      stroke-dasharray: 150 0;
      stroke-dashoffset: 0;
      stroke-width: 0;
      opacity: 1;
    }
    100% {
      fill-opacity: 0;
      stroke-dasharray: 150 0;
      stroke-dashoffset: 0;
      stroke-width: 0;
      opacity: 0;
    }
  }

  @keyframes text-animation {
    0% {
      fill-opacity: 0;
      stroke-dasharray: 1 1000;
      stroke-dashoffset: 0;
      stroke-width: 0;
      opacity: 1;
    }
    100% {
      fill-opacity: 0;
      stroke-dasharray: 150 0;
      stroke-dashoffset: 10;
      stroke-width: 1;
      opacity: 1;
    }
  }

  @keyframes shade-out-disabled {
    0%,
    75% {
      display: flex;
      opacity: 1;
    }
    99% {
      display: flex;
      opacity: 0;
    }
    100% {
      display: none;
      opacity: 0;
    }
  }
`;
