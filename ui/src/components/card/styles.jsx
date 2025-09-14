import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fff;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius};
  width: 100%;
  margin: 0 auto;

  ${(props) => {
    const v = props.$maxWidth;
    if (v === undefined || v === null || v === false) return "";
    if (typeof v === "number") return `max-width: ${v}px;`;
    return `max-width: ${v};`;
  }}

  ${(props) => (props.$noPadding ? "" : `padding: ${props.theme.spacing.lg};`)}

  ${(props) => (props.$fullHeight ? "height: 100%;" : "")}
`;
