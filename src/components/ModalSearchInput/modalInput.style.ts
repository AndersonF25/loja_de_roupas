import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 100%;
  height: 17dvh;
  position: absolute;
  inset: 0;
background-color: var(--color-font-section);
  z-index: 100;
  animation: openModal linear 0.5s;

  @keyframes openModal {
    from {
      transform: translateY(-100px);
    }
    to {
      transform: translateY(0);
    }
  }
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
  font-size: .93rem;

  &:focus {
    outline: none;
    border: none;
  }
`;
