import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <h1 className="title">Hello, webpack!</h1>
    </Container>
  );
};
export default App;

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
