import styled from "@emotion/styled";
import HomeFoodPage from "./pages/homeFoodPage";
import Login from "./pages/login-page";
import UnauthenticatedApp from "./UnauthenticatedApp";
import Profile from "./pages/profile-page";
import { useAuth } from "./context/authContext";

const Container = styled.div`
  max-width: 414px;
  max-height: 896px;
  margin-left: auto;
  margin-right: auto;

  padding: 1rem;
  background-color: #f6f6f9;
`;

function App() {
  const { user } = useAuth();
  console.log(user);
  return (
    <Container>{user ? <HomeFoodPage /> : <UnauthenticatedApp />}</Container>
  );
}

export default App;
