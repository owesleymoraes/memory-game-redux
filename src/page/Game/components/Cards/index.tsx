import React from "react";
import * as Styled from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { changeSpinCard, useSpinCard } from "../../../../redux/sliceSpinCard";

export const Cards: React.FC = () => {
  const dispatch = useDispatch();
  const { listCards } = useSelector(useSpinCard);

  const handleClick = (idCard: number) => {
    dispatch(changeSpinCard(idCard));
  };
  return (
    <>
      {listCards.map((item) => {
        return (
          <Styled.FlipperCard
            key={item.key}
            role="presentation"
            isClicked={item.spin}
            onClick={(event) => handleClick(item.key)}
          >
            <Styled.ContentCard>
              <Styled.TitleCard>{item.nameCard}</Styled.TitleCard>
            </Styled.ContentCard>
          </Styled.FlipperCard>
        );
      })}
    </>
  );
};
