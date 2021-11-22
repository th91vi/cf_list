import styled from "styled-components";
import media from "styled-media-query";
import { Accordion } from "react-bootstrap";

export const StyledAcordion = styled(Accordion)`
  img {
    ${media.lessThan("medium")`
      width: 100%;
      max-width: 100%;
      height: auto;
      `}
  }
`;
