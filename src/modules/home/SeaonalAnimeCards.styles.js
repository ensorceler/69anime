import styled from "styled-components";

export const Container = styled.div`
  max-width: 891px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Header = styled.p`
  font-size: 27px;
  font-weight: 500;
  color: #fff;
  text-align: left;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-column-gap: 5px;
`;
