import { AuthorButton, AuthorDiv, AuthorName } from "./AuthorDisplay-styles";

import React from "react";

const AuthorDisplay = ({ currentQuote, handleAuthorQuotes }) => {
  return (
    <AuthorDiv onClick={() => handleAuthorQuotes(currentQuote.author)}>
      <AuthorButton>
        <AuthorName>{currentQuote.author}</AuthorName>
      </AuthorButton>
    </AuthorDiv>
  );
};

export default AuthorDisplay;
