import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 100%;
  height: 25dvh;
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(4.6px);
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
  height: 20px;
  background-color: transparent;
  position: absolute;
  top: 15px;
  right: 15px;
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
  height: 50px;
  border: none;
  background: #fff;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border: none;
  }
`;
