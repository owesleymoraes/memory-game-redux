import styled from "styled-components";

export const FlipperCard = styled.div<{ isClicked: boolean }>`
  display: flex;
  width: 160px;
  height: 200px;
  padding: 16px;
  border-radius: 4px;
  margin: 12px;
  cursor: pointer;
  transition: 0.6s;
  transform-style: preserve-3d;
  transform: ${(props) =>
    props.isClicked ? "rotateY(180deg)" : "rotateY(0deg)"};
  background-color: ${(props) => (props.isClicked ? "grey" : "red")}; ;
`;

export const ContentCard = styled.div`
  backface-visibility: hidden;
`;

export const TitleCard = styled.h2``;
