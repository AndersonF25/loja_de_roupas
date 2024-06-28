import styled from "styled-components";

export const ContainerTemplate = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-between;
  &:hover {
    -webkit-box-shadow: 0px 3px 7px -1px rgba(89, 89, 89, 1);
    -moz-box-shadow: 0px 3px 7px -1px rgba(89, 89, 89, 1);
    box-shadow: 0px 3px 7px -1px rgba(89, 89, 89, 1);
  }

`;
