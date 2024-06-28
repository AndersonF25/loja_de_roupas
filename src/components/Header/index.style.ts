import styled, { keyframes } from "styled-components";

export const ContainerHeader = styled.header`
  width: 100%;
  height: 92px;
  padding: 4px 0;
  background-color: var(--bg-primary);
  border-bottom: 1px solid #cccccc;
`;

export const ContentHeader = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    max-width: 100%;
    width: 100%;
    justify-content: space-between;
    margin: none;
  }
`;

export const Logo = styled.h1`
  font-family: "Saira Stencil One", sans-serif;
  font-weight: 400;
  size: 40px;
  line-height: 60px;
  cursor: pointer;
  padding-left: 10px;
  color: var(--color-font-section);

  @media (max-width: 450px) {
    font-size: 1.47rem;
  }
`;

export const ContainerInput = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #f3f5f6;
  width: 100%;
  position: relative;

  @media (max-width: 900px) {
    background-color: transparent;
    justify-content: space-around;

    &:active {
      color: var(--color-font-section-hover);
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;
  border-radius: 1px;
  background-color: #f3f5f6;

  &:focus {
    border: none;
    outline: none;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const ContainerIcon = styled.button`
  width: 60px;
  height: 45px;
  display: grid;
  place-items: center;
  cursor: pointer;
  border: none;
  background: transparent;
  position: relative;
`;

const bounce = keyframes`
   0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }

 
`;

export const Quantity = styled.span`
  padding: 2px 6px;
  background-color: red;
  color: #fff;
  border-radius: 50%;
  font-weight: 500;
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 0.8rem;
  animation: ${bounce} 1s infinite alternate;
`;

export const ContainerInputAndIcon = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 900px) {
    width: 170px;
  }
`;

export const MenuHamburguer = styled.div`
  height: 100%;
  display: none;
  cursor: pointer;
  width: 40px;

  @media (max-width: 900px) {
    display: inline;
    margin-right: 20px;
    padding-top: 6px;
  }
`;
