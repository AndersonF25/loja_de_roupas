import styled, { css, keyframes } from "styled-components";

const openModalLogin = keyframes`
  from {
    transform: translateY(-520px);
  }
  to {
    transform: translateY(0);
  }
`;

const closeModalLogin = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-520px);
  }
`;

export const ContainerModal = styled.section`
  width: 100dvw;
  height: 100dvh;
  inset: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.91);
  z-index: 200;
  cursor: pointer;
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 2.1rem;
  cursor: pointer;
  border: 1px solid #fff;
  display: grid;
  place-items: center;
  border-radius: 50%;
  padding: 1px;
`;

export const Modal = styled.div<{ isCLosing: boolean }>`
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background-color: var(--bg-primary);
  padding: 40px;
  animation: ${(props) =>
    props.isCLosing
      ? css`
          ${closeModalLogin} 0.5s linear forwards
        `
      : css`
          ${openModalLogin} 0.5s linear forwards
        `};

  @media (max-width: 1050px) {
    max-width: 700px;
  }
  @media (max-width: 725px) {
    max-width: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;

    justify-content: flex-start;
  }
`;

export const Login = styled.div`
  max-width: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  @media (max-width: 725px) {
    max-width: 95%;
    width: 100%;
    flex-direction: column;
    height: 30%;
  }
`;

export const Register = styled(Login)``;

export const H2 = styled.h2`
  font-size: 2.1rem;
  font-weight: 500;
  color: var(--bg-secondary);
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: space-between;
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--bg-secondary);
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: 1px solid var(--border-color);
  height: 40px;
  border-radius: 3px;
  padding-left: 7px;
  font-size: 1.1rem;
`;

export const BtnAndNewPassword = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const BtnSubmit = styled.button`
  width: 50%;
  border: 1px solid var(--border-color);
  background-color: transparent;
  color: #fff;
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: 600;
  padding: 5px 0;
  border-radius: 10px;
  cursor: pointer;
  transition: all.4s;

  &:hover {
    background-color: var(--border-color);
  }
  &:focus {
    outline: none;
    border: 1px solid var(--border-color);
  }

  @media (max-width: 400px) {
    width: 70%;
  }
`;

export const NewPassword = styled.a`
  font-size: 1rem;
  cursor: pointer;
  color: var(---bg-secondary);
`;
