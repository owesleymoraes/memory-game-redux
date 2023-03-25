import React, { useState } from "react";
import * as Styled from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSpinCard,
  reverseTheCards,
  useSpinCard,
} from "../../../../redux/sliceSpinCard";

export const Cards: React.FC = () => {
  const [amountClick, setAmountClick] = useState<number>(1);

  const dispatch = useDispatch();
  const { listCards } = useSelector(useSpinCard);

  const handleClick = (idCard: number) => {
    dispatch(changeSpinCard(idCard));

    setAmountClick(amountClick + 1);

    if (amountClick === 2) {
      setTimeout(() => {
        dispatch(reverseTheCards());
        setAmountClick(1);
      }, 700);
    }
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
