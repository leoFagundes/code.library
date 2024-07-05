import styled from "styled-components";

export const LineContainer = styled.div<{
  color?: string;
  margintop?: string;
  marginbottom?: string;
  width?: string;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  absolute?: "true" | "false";
}>`
  position: ${(props) => (props.absolute === "true" ? "absolute" : "relative")};
  top: ${(props) => props.top || undefined};
  bottom: ${(props) => props.bottom || undefined};
  right: ${(props) => props.right || undefined};
  left: ${(props) => props.left || undefined};
  width: ${(props) => props.width || "90%"};
  height: 1px;
  background-color: ${(props) => props.color || props.theme.textColor};
  margin-top: ${(props) => props.margintop || 0};
  margin-bottom: ${(props) => props.marginbottom || 0};
`;
