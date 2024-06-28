import styled from "styled-components";

export const BtnScrollToTop = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background-color: var(--color-font-section);
  position: fixed;
  z-index: 100;
  border: 1px solid black;
 
  right: 15px;
  bottom: 15px;
  cursor: pointer;
  color: #ccc;
  display: grid;
  place-items: center;
  border-radius: 50%;
  transition: all.2s;
  &:active {
    background-color: var(--color-font-section-hover);
    transition: all.2s;
  }

  @media (max-width : 900px) {
    width: 33px;
    height: 33px;
    right: 10px;
    bottom: 10px;
  }
`;
