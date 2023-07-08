import styled from "@emotion/styled";

import { colors } from "../styles/colors";
import { typography } from "../styles/typography";
import EatableLogo from "../images/logo.png";
import TypeNav from "../components/type-nav";
import Input from "../components/input";
import Button from "../components/button";

const Container = styled.div`
  background-color: #f6f6f9;
`;

const Header = styled.header`
  max-width: 414px;
  height: 382px;
  border-radius: 30px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 181px;
  height: 50px;
  background: ${colors.white};
`;

const Form = styled.form`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #f6f6f9;
  max-width: 414px;
  height: 504px;
`;

const InputWrapper = styled.div`
    display: flex
    flex-direction: column;

    gap: 20px;
`;

function Login() {
  return (
    <Container>
      <Header>
        <LogoWrapper>
          <Logo src={EatableLogo}></Logo>
        </LogoWrapper>
        <div>
          <TypeNav />
        </div>
      </Header>

      <Form>
        <InputWrapper>
          <Input
            label={"Email adress"}
            type="email"
            placeholder="my_mail@mail.com"
          ></Input>
          <Input
            label={"Password"}
            type="password"
            placeholder="******"
          ></Input>
        </InputWrapper>
        <Button rounded>Login</Button>
      </Form>
    </Container>
  );
}
export default Login;
