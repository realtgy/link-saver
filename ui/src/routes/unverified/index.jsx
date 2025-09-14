import { useTheme } from "styled-components";
import { useAuth } from "../../hooks/use-auth";
import Card from "../../components/card";
import Logo from "../../components/logo";
import { Wrapper, Content, LogoWrapper, Title } from "./styles";

const UnverifiedRoute = () => {
  useAuth({
    onUnauth: "/login",
  });
  const theme = useTheme();
  return (
    <Wrapper>
      <Card maxWidth={theme.sizes.md}>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Title>Verify Your Email.</Title>
        <Content>
          Plz click the link on the email we sent to your inbox to verify your
          account.
        </Content>
      </Card>
    </Wrapper>
  );
};

export default UnverifiedRoute;
