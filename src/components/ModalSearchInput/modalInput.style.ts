import styled, { css, keyframes } from "styled-components";

const openModalSearch = keyframes`
  from {
    transform: translateY(-200px);
  }
  to {
    transform: translateY(0);
  }
`;

const closeModalSearch = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-200px);
  }
`;

export const ContainerModal = styled.div<{ isClosing: boolean }>`
  width: 100%;
  height: 17dvh;
  position: absolute;
  border-bottom: 1px solid #fff;
  inset: 0;
  background-color: var(--bg-primary);
  z-index: 100;
  animation: ${(props) =>
    props.isClosing
      ? css`
          ${closeModalSearch} 0.7s linear forwards
        `
      : css`
          ${openModalSearch} 0.7s linear forwards
        `};
`;

export const ContainerIcon = styled.div`
  width: 30px;
  height: 23px;
  background-color: transparent;
  position: absolute;
  top: 7px;
  right: 9px;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const Input = styled.input`
  width: 70%;
  height: 40px;
  border: none;
  background: #fff;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 0.93rem;

  &:focus {
    outline: none;
    border: none;
  }
`;
