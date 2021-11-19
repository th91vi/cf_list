import Image from "next/image";
import { Row, Col, Stack } from "react-bootstrap";
import { FaQuestionCircle } from "react-icons/fa";
import { data } from "../../../data/data";

export function ProductHighlight() {
  const {
    product: {
      activePrinciple,
      category,
      manufacturer,
      EAN,
      PMC_SP,
      purpose,
      deals,
      minPrice,
      maxPrice,
    },
  } = data;
  return (
    <Row>
      <Col xs={3}>
        <Image src="/semimagem.jpg" width={120} height={120} alt="Sem imagem" />
        <Row>
          <Col>|R|</Col>
          <Col>
            <span>Referência</span>
          </Col>
        </Row>
      </Col>
      <Col xs={9}>
        <ul style={{ listStyleType: "none", paddingInlineStart: "0" }}>
          <li>
            <strong>Principio ativo: </strong>
            {activePrinciple}
          </li>
          <li>
            <strong>Categoria: </strong>
            {category}
          </li>
          <li>
            <strong>Fabricante: </strong>
            {manufacturer}
          </li>
          <li>
            <strong>EAN: </strong>
            {EAN} | <strong>PMC/SP: </strong>
            {PMC_SP}
          </li>
          <li>
            <span>
              <FaQuestionCircle
                style={{ marginRight: "8px" }}
                className="mb-1"
              />
            </span>
            <strong>Para que serve: </strong>
            {purpose}
          </li>
          <li>
            <strong>{deals}</strong> ofertas encontradas. A partir de{" "}
            <strong>{minPrice}</strong> até <strong>{maxPrice}</strong>
          </li>
        </ul>
      </Col>
    </Row>
  );
}
