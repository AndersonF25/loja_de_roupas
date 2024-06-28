import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
 
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  place-items: center;
  gap:25px 30px;

@media (max-width:1445px) {
  padding: 0 15px;
  gap: 65px 30px;
}
@media (max-width:869px) {
  gap: 115px 30px;
}
@media (max-width:869px) {
 grid-template-columns: repeat(1, 390px);

 justify-content: center;
 width: 100%;
}

@media (max-width :430px ){
  grid-template-columns: repeat(1, 300px);
  gap: 60px 30px;
}
`;
