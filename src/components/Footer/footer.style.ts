import styled from "styled-components";

export const ContainerFooter = styled.footer`
  width: 100%;
  border-top: 1px solid var(--border-color);

`;

export const ContentFooter = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding:30px 0;
`;

export const H2 = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
`;

export const Sociais = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;
