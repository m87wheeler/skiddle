import * as React from "react";
import Link from "next/link";
import Logo from "./logo";
import { StyleContext } from "../../../context/style-context";
import { HeaderContainer } from "./styles";

const Header = () => {
  const { headerColor } = React.useContext(StyleContext);

  return (
    <HeaderContainer variant={headerColor}>
      <Link href="/">
        <h1 title="Skiddle">
          <Logo />
        </h1>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
