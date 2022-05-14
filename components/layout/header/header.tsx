import * as React from "react";
import Link from "next/link";
import Logo from "./logo";
import { StyleContext } from "../../../context/style-context";
import { HeaderContainer } from "./styles";
import { StorageKeys } from "../../../types";

const Header = () => {
  const { headerColor } = React.useContext(StyleContext);

  const handleGoBack = React.useCallback(() => {
    sessionStorage.setItem(StorageKeys.page, `${0}`);
  }, []);

  return (
    <HeaderContainer variant={headerColor}>
      <Link href="/">
        <h1 title="Skiddle" onClick={handleGoBack}>
          <Logo />
        </h1>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
