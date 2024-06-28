import styled from "styled-components";

export const TemplateProduct = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.5s;
  position: relative;
  z-index: 1;
  padding-bottom: 3px;
`;

export const Title = styled.span`
  font-size: 1.3rem;
  font-weight: 400;
  padding: 0 0 0 5px;
`;

export const Price = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
`;

export const ContainerBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 4px;
  gap: 2px;
`;

export const BtnAddCart = styled.button`
  max-width: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  background-color: var(--color-font-section);
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    transition: all 0.4s;
    background-color: var(--color-font-section-hover);
  }
`;

export const BtnViewProduct = styled(BtnAddCart)``;
