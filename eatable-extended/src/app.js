import styled from "@emotion/styled";
import Food from "./components/food";
import Login from "./pages/login-page";
import UnauthenticatedApp from "./UnauthenticatedApp";

const Container = styled.div`
  max-width: 414px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
`;

function App() {
  return (
    <Container>
      <UnauthenticatedApp />
    </Container>
  );
}

export default App;
