import * as React from "react";
import { ContentContainer } from "./styles";

interface Props {
  paragraph?: string;
}

const ContentBlock = ({ paragraph = "" }: Props) => {
  const formattedParagraph = React.useMemo(() => {
    return paragraph.replace(/(?:\r\n|\r|\n)/g, "<br>");
  }, [paragraph]);

  return (
    <ContentContainer
      dangerouslySetInnerHTML={{ __html: `<p>${formattedParagraph}</p>` }}
    />
  );
};

export default ContentBlock;
