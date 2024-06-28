import styled, { createGlobalStyle } from "styled-components";

type MenuOpen = {
  isMenuOpen: boolean;
};

export const GlobalStyle = createGlobalStyle<MenuOpen>`
  body {
    overflow: ${({ isMenuOpen }) => (isMenuOpen ? "hidden" : "auto")};
  }
`;
export const ContainerMobile = styled.div`
  position: absolute;
  width: 100%;
  height: 100dvh;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: 120;
  background: rgba(255, 255, 255, 0);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(4.6px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
`;
