import styled from "styled-components";

export const NavPagination = styled.nav`
  width: 100%;
  display: grid;
  place-items: center;
  margin-bottom: 15px;

`;

export const Ul = styled.ul`
    display: flex;
    gap: 20px;

`

export const ListPagination = styled.ul`
    display: flex;
    gap: 7px;

`

export const Btn = styled.button`
    background-color: var(--bg-secondary);
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    color: var(--bg-primary);
    display: grid;
    place-items: center;
   &:focus{
    background-color: #cc3455cc;
   }
  

`