import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.bg};
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vh;
  width: 100%;
  height: 100%;
`;

export const LogoWrapper = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.md};
  text-align: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text.xl};
  font-size: ${(props) => props.theme.text.xl};
  margin-bottom: ${(props) => props.theme.spacing.lg};
  text-align: center;
`;

export const Context = styled.div`
  margin-top: ${(props) => props.theme.spacing.md};
  > * + * {
    margin-top: ${(props) => props.theme.spacing.sm};
  }
`;

export const SecondaryAction = styled(Link)`
  color: ${(props) => props.theme.colors.text};
  margin-top: ${(props) => props.theme.spacing.md};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primaryHover};
    text-decoration: underline;
  }
`;
