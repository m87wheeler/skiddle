import * as React from "react";
import Breadcrumbs from "../../ui/breadcrumbs/breadcrumbs";
import ToTop from "../../ui/to-top/to-top";
import Header from "../header/header";
import { LayoutContainer } from "./styles";

interface Props {
  children?: React.ReactNode;
}

const Page = ({ children }: Props) => {
  return (
    <LayoutContainer>
      <Header />
      <main>
        <Breadcrumbs />
        {children}
        <ToTop />
      </main>
    </LayoutContainer>
  );
};

export default Page;
