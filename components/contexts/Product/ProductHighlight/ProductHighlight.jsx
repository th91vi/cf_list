import Image from "next/image";
import { Row, Col, Button } from "react-bootstrap";
import { FaBell, FaQuestionCircle, FaShoppingBasket } from "react-icons/fa";
import { data } from "../../../../data/data";

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
      <Col>
        <div className="d-grid gap-2">
          <Button size="lg" variant="success">
            Melhor preço: R${minPrice}
          </Button>
          <Row>
            <Col>
              <Button size="lg" variant="primary">
                <span>
                  <FaShoppingBasket
                    style={{ marginRight: "8px" }}
                    className="mb-1"
                  />
                  <small>INCLUIR NA LISTA</small>
                </span>
              </Button>
            </Col>
            <Col>
              <Button size="lg" variant="primary">
                <span>
                  <FaBell style={{ marginRight: "8px" }} className="mb-1" />
                  <small>LEMBRETE</small>
                </span>
              </Button>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}
