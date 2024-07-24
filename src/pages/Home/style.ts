import styled from "styled-components";

export const HomeContainer = styled.section`
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
`;
