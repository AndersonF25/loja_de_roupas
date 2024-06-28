import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 0 0 0 15px;
`;

export const Img = styled.img`
  max-width: 35%;
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

export const ContainerDescription = styled.div`
  max-width: 65%;
  gap: 14px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 15px;
`;

export const HeaderDescription = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 575px) {
    font-size: 0.87rem;
    width: 100%;
  }
`;

export const BtnTrash = styled.button`
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  color: #ff2f21;
  cursor: pointer;
`;

export const ContainerQuantity = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
`;

export const Input = styled.input`
  border: none;
  width: 35px;
  height: 25px;
  border: 1px solid #c1c1c1;
  border-radius: 5px;
  text-align: center;
  font-weight: 600;
  color: var(--bg-primary);
  &:focus {
    border: none;
    outline: none;
  }
`;

export const Price = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--bg-primary);

  @media (max-width: 575px) {
    font-size: 1.19rem;
  }
`;
