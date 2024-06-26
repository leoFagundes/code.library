import * as S from "./style";

type LineProps = {
  color?: string;
  verticalMargin?: string;
};

const Line = ({ color, verticalMargin }: LineProps) => {
  return <S.LineContainer color={color} verticalMargin={verticalMargin} />;
};

export default Line;
