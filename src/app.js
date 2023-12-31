import styled from "@emotion/styled";
import HomeFoodPage from "./pages/homeFoodPage";
import UnauthenticatedApp from "./UnauthenticatedApp";
// import AuthenticatedApp from "./AuthenticatedApp";
import { useAuth } from "./context/authContext";

const Container = styled.div`
  max-width: 414px;
  max-height: 896px;
  margin-left: auto;
  margin-right: auto;
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
