import styled from "styled-components";
import { Card, ListGroup } from "react-bootstrap";

export const AutoCompleteCard = styled(Card)`
  padding: 2rem 1rem;
  margin-top: 1rem;
  position: relative;
`;

export const ResultsList = styled(ListGroup)`
  position: absolute;
  margin-top: 4.75rem;
  width: 100%;
  max-height: 300px;
  overflow: hidden;
  box-shadow: 5px 5px 15px 5px #000000;
  z-index: 5;
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
`;
