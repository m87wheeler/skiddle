import * as React from "react";
import Breadcrumbs from "../../ui/breadcrumbs/breadcrumbs";
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
      </main>
    </LayoutContainer>
  );
};

export default Page;
