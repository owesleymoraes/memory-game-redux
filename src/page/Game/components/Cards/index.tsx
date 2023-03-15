import React, { useState } from "react";
import * as Styled from "./styles";

interface CardsProps {
  title?: string;
}

export const Cards: React.FC<CardsProps> = ({ title }) => {
  const [cardSpin, setCardSpin] = useState<boolean>(true);

  const handleClick = () => {
    setCardSpin(!cardSpin);
  };
  return (
    <Styled.FlipperCard
      role="presentation"
      isClicked={cardSpin}
      onClick={handleClick}
    >
      <Styled.ContentCard>
        <Styled.TitleCard>{title}</Styled.TitleCard>
      </Styled.ContentCard>
    </Styled.FlipperCard>
  );
};
