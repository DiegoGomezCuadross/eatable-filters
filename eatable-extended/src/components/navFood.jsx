import styled from "@emotion/styled";

const ConteinerHeaderFood = styled.header`
  padding: 10px 0;
`;
const ConteinerNav = styled.nav`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;
const ConteinerLi = styled.li`
  margin-right: 10px;
  list-style: none;
  text-decoration: none;
`;
const NameCategory = styled.a`
  text-decoration: none;
  padding: 10px 20px;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover,
  active,
  focus {
    color: #fa4a0c;
    border-bottom: 4px solid;
    box-shadow: 0px 4px 4px 0px rgba(195, 63, 21, 0.1);
  }
`;

function NavFood() {
  return (
    <ConteinerHeaderFood>
      <ConteinerNav>
        <ul className={ConteinerNav}>
          <ConteinerLi>
            <NameCategory href="#">Italian</NameCategory>
            <NameCategory href="#">Mexican</NameCategory>
            <NameCategory href="#">Snacks</NameCategory>
            <NameCategory href="#">Peruvian</NameCategory>
          </ConteinerLi>
        </ul>
      </ConteinerNav>
    </ConteinerHeaderFood>
  );
}

export default NavFood;
