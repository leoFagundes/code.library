import * as S from "./style";

type LineProps = {
  color?: string;
  margintop?: string;
  marginbottom?: string;
  width?: string;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  absolute?: boolean;
};

const Line = ({
  color,
  margintop,
  marginbottom,
  width,
  top,
  bottom,
  right,
  left,
  absolute,
}: LineProps) => {
  return (
    <S.LineContainer
      data-testid="lineElement"
      color={color}
      $marginTop={margintop}
      $marginBottom={marginbottom}
      width={width}
      top={top}
      $bottom={bottom}
      right={right}
      left={left}
      $absolute={absolute}
    />
  );
};

export default Line;
