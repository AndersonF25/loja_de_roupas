import styled, { keyframes , css} from "styled-components";

type ContainerCartProps = {
  isClosing: boolean;
}

const openCart = keyframes`
  from {
    transform: translateX(520px);
  }
  to {
    transform: translateX(0);
  }
`;

const closeCart = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(520px);
  }
`;

export const ContainerFather = styled.div`
  width: 100vw;
  height: 100dvh;
  position: absolute;
  inset: 0;
  background-color: rgb(0, 0, 0, 0.8);
  z-index: 150;
  overflow: hidden;
  cursor: pointer;
`;

export const ContainerCart = styled.div<ContainerCartProps>`
  width: 600px;
  height: 100dvh;
  background-color: #fffafa;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  z-index: 160;
  animation: ${(props) =>
    props.isClosing
      ? css`${closeCart} 0.5s linear forwards`
      : css`${openCart} 0.5s linear forwards`};

  &::-webkit-scrollbar {
    width: 2px;
  }

  @media (max-width: 900px) {
    width: 100dvw;
    height: 100dvh;
  }
`;

export const ContainerWaningEmptyCart = styled.div`
  width: 100%;
  height: 90%;
  display: grid;
  place-items: center;
  z-index: -1;
`;

export const Warning = styled.span`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: var(--bg-primary);
  z-index: -1;
`;

export const ContainerCloseIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 5px;
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListCards = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 66dvh;
  overflow-y: scroll;
  padding-bottom: 10px;
  &::-webkit-scrollbar {
    width: 2px;
    background-color: #ccc;
  }
`;

export const ContainerInfoPayment = styled.div`
  width: 100%;
  height: 24dvh;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  padding: 10px 0 0 0;
`;

export const Summary = styled.h2`
  text-align: center;
  width: inherit;
  font-size: 1.3rem;
  color: var(--bg-primary);
`;

export const Infos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Span = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: var(--bg-primary);
`;

export const Delivery = styled.span`
  align-self: flex-end;
  font-size: 1rem;
  font-weight: 500;
  color: var(--bg-primary);
`;

export const FreeDelivery = styled.p`
  font-size: 0.9rem;
  color: var(--color-font-section);
`;

export const ContainerDelivery = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 2px;
`;

export const BtnFinish = styled.button`
  width: 100%;
  border: none;
  background-color: #51b853;
  border-radius: 2px;
  padding: 6px 0;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 5px;
  cursor: pointer;
  transition: all.4s;
  &:focus {
    border: none;
    outline: none;
  }

  &:hover {
    background-color: #51b253;
    transition: all.4s;
  }
`;
