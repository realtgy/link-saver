import styled from "styled-components";

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

export const Content = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.text.md};
`;
