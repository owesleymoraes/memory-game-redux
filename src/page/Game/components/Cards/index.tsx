import React from "react";
import * as Styled from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { changeSpinCard, useSpinCard } from "../../../../redux/sliceSpinCard";

interface CardsProps {
  title?: string;
}

export const Cards: React.FC<CardsProps> = ({ title }) => {
  const spin = useSelector(useSpinCard);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeSpinCard());
  };
  return (
    <Styled.FlipperCard
      role="presentation"
      isClicked={spin.spinCard}
      onClick={handleClick}
    >
      <Styled.ContentCard>
        <Styled.TitleCard>{title}</Styled.TitleCard>
      </Styled.ContentCard>
    </Styled.FlipperCard>
  );
};
