import styled from "styled-components";

export const ContainerDetails = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  height: 600px;
  margin-top: 40px;
  align-items: center;
  gap: 45px;

  @media (max-width: 1445px) {
    padding: 0 15px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const ContainerSwiper = styled.div`
  max-width: 50%;
  width: 100%;
  height: 100%;

  @media (max-width: 1000px) {
    max-width: 60%;
    height: 50%;
  }
  @media (max-width: 550px) {
    max-width: 80%;
    width: 100%;
  }
  @media (max-width: 420px) {
    max-width: 95%;
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`;

export const ContainerDescription = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;

  @media (max-width: 1000px) {
    width: 100%;
    padding-bottom: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 400;

  @media (max-width: 1000px) {
    font-size: 2rem;
  }

  @media (max-width: 550px) {
    font-size: 1.5rem;
  }
`;

export const Price = styled.span`
  font-size: 2rem;
  font-weight: 600;

  @media (max-width: 550px) {
    font-size: 1.6rem;
  }
`;

export const DescriptionContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TitleDescription = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Description = styled.p`
  font-size: 0.84rem;
  line-height: 24px;
  font-weight: 500;

  overflow-y: scroll;
  height: 140px;

  &::-webkit-scrollbar {
    width: 2px;
    background-color: #cccc;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fff;
  }

  @media (max-width: 1000px) {
    font-size: 0.8rem;
    height: auto;
    overflow-y: hidden;
  }

  @media (max-width: 550px) {
    font-size: 0.7rem;
  }
`;

export const EmptyDescription = styled.h3`
  text-align: center;

  font-size: 1.4rem;
  font-weight: 500;
`;

export const Btn = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #105786;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  display: block;
  border-radius: 6px;
  transition: all.4s;

  &:hover {
    background-color: #105769;
    transition: all.4s;
  }
  &:focus {
    color: #c1c1c1;
  }

  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const ContainerLoader = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
`;

export const BtnGoBack = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  text-align: center;
  margin-left: 10px;
  padding-top: 10px;
  background-color: transparent;
  color: var(--font-primary);
  padding: 6px 15px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
`;
