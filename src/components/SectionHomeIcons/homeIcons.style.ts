import styled from "styled-components";

export const ContainerIcons = styled.section`
  width: 100%;
  background-color: var(--bg-primary);
  margin-top: -40px;
  margin-bottom: 15px;
  border-bottom: 1px solid var(--border-color);
`;

export const List = styled.ul`
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 30px;

  @media (max-width: 1370px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px 0;
  }

  @media (max-width: 761px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 25px 0;
  }
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-right: 1px solid var(--border-color);

  &:nth-child(4) {
    border-right: none;
  }

  @media (max-width: 790px) {
    border: none;
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  width: 20%;
  height: 100%;
  display: grid;
  place-items: center;
  @media (max-width: 790px) {
    width: 15%;
  }
`;

export const Content = styled.div`
  width: 77%;
  @media (max-width: 790px) {
    text-align: center;
  }
`;

export const Title = styled.h2`
  width: 100%;
  padding-bottom: 6px;
  font-size: 1.4rem;
  @media (max-width: 790px) {
    font-size: 1.2rem;
  }
`;

export const Description = styled.p`
  width: 95%;
  font-size: 0.9rem;
  font-weight: 400;
  @media (max-width: 790px) {
    font-size: 0.79rem;
  }
`;
