import styled from "styled-components";

export const ContainerSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 40px;
  @media (max-width: 790px) {
    gap: 70px;
  }
`;

export const ContainerWoman = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 790px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerMen = styled(ContainerWoman)`
  @media (max-width: 790px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

export const ContentLeftWoman = styled.div`
  max-width: 57%;
  width: 100%;
  height: 100%;

  @media (max-width: 790px) {
    max-width: 80%;
  }
`;

export const ContentRightWoman = styled.div`
  max-width: 30%;
  width: 100%;
  @media (max-width: 790px) {
    max-width: 100%;
  }
`;

export const ContainerRightMan = styled(ContentLeftWoman)``;

export const ContainerLeftMan = styled.div`
  max-width: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 790px) {
    max-width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 790px) {
    width: 100%;
    display: grid;
    place-items: center;
    gap: 10px;
  }
`;

export const H3 = styled.h3`
  font-size: 2.7rem;
  font-weight: 400;
  color: var(--color-font-section);

  @media (max-width: 1120px) {
    padding: 0 20px;
    font-size: 2.2rem;
  }
`;

export const Span = styled.span`
  font-size: 1.2rem;
  font-weight: 200;
  color: #ccc;
  @media (max-width: 1120px) {
    padding: 0 20px;
    font-size: 1rem;
    margin-bottom: 5px;
  }
`;

export const Btn = styled.button`
  max-width: 210px;
  width: 100%;
  margin-top: 20px;
  border: none;
  padding: 7px 0;
  background-color: var(--color-font-section);
  border-radius: 2px;
  font-size: 1.1rem;
  text-transform: uppercase;
  color: #ccc;
  cursor: pointer;
  transition: all.3s;

  &:hover {
    background-color: var(--color-font-section-hover);
    transition: all.3s;
  }

  @media (max-width: 1120px) {
    margin: 0 20px;
    padding: 4px 0;
    font-size: 1rem;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
