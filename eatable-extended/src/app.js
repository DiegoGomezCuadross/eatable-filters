import styled from "@emotion/styled";
import Food from "./components/food";
import Login from "./pages/login-page";
import UnauthenticatedApp from "./UnauthenticatedApp";
import Profile from "./pages/profile-page";

const Container = styled.div`
  max-width: 414px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  background-color: #f6f6f9;
`;

function App() {
  return (
    <Container>
      <Profile />
    </Container>
  );
}

export default App;
