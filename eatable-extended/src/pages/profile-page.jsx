import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import Footer from "../components/footer";
import Button from "../components/button";
import { colors } from "../styles/colors";

const Container = styled.div`
  background-color: #f6f6f9;
  padding-top: 10px;
  height: 896px;
`;
const Header = styled.header`
  max-width: 414px;
  background-color: #f6f6f9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavIcon = styled(NavLink)`
  border: none;
  cursor: pointer;
  padding: 0.625rem;
  background-color: #f5f5f8;
  color: ${colors.stone[600]};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 59px;
  height: 59px;
  &:active {
    color: ${colors.orange[500]};
  }
`;
function Profile() {
  return (
    <Container>
      <Header>
        <NavIcon to={"profile"}>
          <BsChevronLeft
            style={{
              width: "24px",
              height: "24px",
            }}
          />
        </NavIcon>
        <h3>My Profile</h3>
        <div style={{ color: "#f5f5f8" }}>.............</div>
      </Header>
      <Button rounded>Logout</Button>
      <Footer></Footer>
    </Container>
  );
}

export default Profile;
