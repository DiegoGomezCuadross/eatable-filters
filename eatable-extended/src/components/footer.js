import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { BiSolidHome } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { colors } from "../styles/colors";

const NavIcon = styled(NavLink)`
  border: none;
  cursor: pointer;
  padding: 0.625rem;
  background-color: #f5f5f8;
  color: ${colors.stone[400]};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 59px;
  height: 59px;
  &:active {
    color: ${colors.orange[500]};
  }
`;

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

function Footer() {
  return (
    <FooterDiv>
      <NavIcon
        to={"search"}
        style={({ isActive }) => {
          if (!isActive) return;
          return {
            color: colors.orange[500],
            "&:visited": {
              color: colors.orange[500],
            },
          };
        }}
      >
        <BiSolidHome
          style={{
            width: "24px",
            height: "24px",
          }}
        />
      </NavIcon>
      <NavIcon
        to={"profile"}
        style={({ isActive }) => {
          if (!isActive) return;
          return {
            color: colors.orange[500],
            "&:visited": {
              color: colors.orange[500],
            },
          };
        }}
      >
        <FaUserAlt
          style={{
            width: "24px",
            height: "24px",
          }}
        />
      </NavIcon>
    </FooterDiv>
  );
}

export default Footer;
