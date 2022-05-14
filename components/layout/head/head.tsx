import * as React from "react";
import NextHead from "next/head";

interface Props {
  title: string;
  description: string;
}

const Head = ({ ...props }: Props) => {
  return (
    <NextHead>
      <title>Skiddle | {props.title}</title>
      <meta name="description" content={props.description} />
    </NextHead>
  );
};

export default Head;
