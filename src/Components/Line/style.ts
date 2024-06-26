import styled from "styled-components";

export const LineContainer = styled.div<{
  color?: string;
  verticalMargin?: string;
}>`
  width: 90%;
  height: 1px;
  background-color: ${(props) => props.color || props.theme.textColor};
  margin: ${(props) => props.verticalMargin || 0};
`;
