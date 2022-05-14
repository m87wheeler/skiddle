import * as React from "react";
import { useBrowserBack } from "../../../hooks/use-browser-back";
import ToTop from "../../ui/to-top/to-top";
import Header from "../header/header";
import { LayoutContainer } from "./styles";

interface Props {
  children?: React.ReactNode;
}

const Page = ({ children }: Props) => {
  useBrowserBack(() => {});

  return (
    <LayoutContainer>
      <Header />
      <main>
        {children}
        <ToTop />
      </main>
    </LayoutContainer>
  );
};

export default Page;
