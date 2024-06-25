import { styled } from "styled-components";

const Div = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
`;

const Home = () => {
  return (
    <div>
      <Div>teste</Div>
    </div>
  );
};

export default Home;
