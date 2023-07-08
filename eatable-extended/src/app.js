import styled from "@emotion/styled";
import Food from "./components/food";
import Login from "./pages/login-page";
import UnauthenticatedApp from "./UnauthenticatedApp";

const Container = styled.div`
  max-width: 414px;
  max-height: 896px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 45px;
  background: #d1d5db;
  border-radius: 20px;
`;

function App() {
  return (
    <Container>
      <UnauthenticatedApp />
    </Container>
  );
}

export default App;
