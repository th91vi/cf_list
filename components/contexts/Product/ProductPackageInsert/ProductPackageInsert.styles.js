import styled from "styled-components";
import media from "styled-media-query";
import { viagraPackageInsertData } from "../../../../data/viagraPackageInsert";

const Content = ({ className }) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: viagraPackageInsertData }}
    />
  );
};

export const ProductPackageInsertContent = styled(Content)`
  img {
    max-width: 100%;
    ${media.lessThan("medium")`
      width: 100%;
      height: auto;
      `}
  }
`;
