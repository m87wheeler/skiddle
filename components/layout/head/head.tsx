import * as React from "react";
import NextHead from "next/head";
import { StyleContext } from "../../../context/style-context";
import { theme } from "../../../styles/theme";

interface Props {
  title: string;
  description: string;
}

const Head = ({ ...props }: Props) => {
  const { headerColor } = React.useContext(StyleContext);

  return (
    <NextHead>
      <title>Skiddle | {props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="theme-color" content={theme.palette[headerColor]._} />
    </NextHead>
  );
};

export default Head;
