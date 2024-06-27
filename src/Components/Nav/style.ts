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
        display: flex;
        justify-content: center;
        position: relative;
        list-style-type: none;

        &::before {
          content: "";
          position: absolute;
          bottom: 0;
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
`;
