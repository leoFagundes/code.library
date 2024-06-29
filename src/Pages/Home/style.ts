import styled from "styled-components";

export const mainContainer = styled.main`
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

  img {
    width: 25rem;
    max-width: 70%;
    min-width: 340px;
    filter: drop-shadow(0px 4px 250px ${({ theme }) => theme.tertiaryColor})
      brightness(95%) contrast(105%) saturate(115%);
  }
`;
