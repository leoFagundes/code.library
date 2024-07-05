import styled from "styled-components";

export const LineContainer = styled.div<{
  color?: string;
  $marginTop?: string;
  $marginBottom?: string;
  width?: string;
  top?: string;
  $bottom?: string;
  right?: string;
  left?: string;
  $absolute?: boolean;
}>`
  position: ${(props) => (props.$absolute ? "absolute" : "relative")};
  top: ${(props) => props.top || undefined};
  bottom: ${(props) => props.$bottom || undefined};
  right: ${(props) => props.right || undefined};
  left: ${(props) => props.left || undefined};
  width: ${(props) => props.width || "90%"};
  height: 1px;
  background-color: ${(props) => props.color || props.theme.textColor};
  margin-top: ${(props) => props.$marginTop || 0};
  margin-bottom: ${(props) => props.$marginBottom || 0};
`;
