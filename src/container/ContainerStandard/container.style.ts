import styled from "styled-components";

type DirectionProps = {
  direction?: "row" | "column";
};

export const ContainerStandard = styled.div<DirectionProps>`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
 gap: 15px;
`;
