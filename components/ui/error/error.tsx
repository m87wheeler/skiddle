import * as React from "react";
import { ErrorContainer } from "./styles";

interface Props {
  error: string;
}

const Error = ({ error }: Props) => {
  return <ErrorContainer>{error}</ErrorContainer>;
};

export default Error;
