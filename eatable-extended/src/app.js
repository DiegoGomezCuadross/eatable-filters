import styled from "@emotion/styled";
import Food from "./components/food";

const Container = styled.div`
  max-width: 414px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
`;

function App() {
  return (
    <Container>
      <h1>Team 2</h1>
      <Food />
    </Container>
  );
}

export default App;
