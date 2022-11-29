import styled from "styled-components";

export const CardContainers = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 170px;
  border-radius: 10px;
  overflow: hidden;
`;
export const AnimePosterContainer = styled.div`
  height: 250px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const AnimePoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AnimeName = styled.p`
  color: #ababab;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`;
