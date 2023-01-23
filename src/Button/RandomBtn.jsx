import { ButtonDiv, RandomButton } from "./RandomBtn-styles";

import React from "react";
import { TiArrowSync } from "react-icons/ti";

const RandomBtn = ({ handleRandomQuote, setAuthorQuotes }) => {
  return (
    <ButtonDiv
      onClick={() => {
        handleRandomQuote();
        setAuthorQuotes([]);
      }}
    >
      <RandomButton>
        random <TiArrowSync />
      </RandomButton>
    </ButtonDiv>
  );
};

export default RandomBtn;
