import { Accordion, Stack, Card, Row, Col } from "react-bootstrap";
import { FaArrowUp, FaDollarSign, FaFile, FaSearch } from "react-icons/fa";
import { ProductHighlight } from "../ProductHighlight";
import { data } from "../../../data/data";
import { ProductItem } from "../ProductItem";

export function Listing() {
  const {
    product: { medicineName, dosage, medicineModifier, quantity },
    deals,
  } = data;
  return (
    <>
      <Accordion defaultActiveKey="0" className="mt-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Stack direction="horizontal">
              <span>
                <FaSearch style={{ marginRight: "8px" }} />
              </span>
              <span>
                {medicineName} {dosage} {medicineModifier}
              </span>
            </Stack>
          </Accordion.Header>
          <Accordion.Body>
            <ProductHighlight />
            <h2 className="text-center my-3">Ofertas encontradas</h2>
            {deals.map((deal, index) => (
              <ProductItem key={index} deal={deal} />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="my-3">
        <h5>Veja mais:</h5>
        <Card className="p-2">
          <Row>
            <Col>
              <Stack direction="vertical">
                <a href="#" title="IR PARA LOJA" target="_blank" rel="noopener">
                  <span>
                    <FaFile /> Bula {medicineName} {dosage} {quantity}
                    {medicineModifier}
                  </span>
                </a>
                <a href="#" title="IR PARA LOJA" target="_blank" rel="noopener">
                  <span>
                    <FaDollarSign /> Menor preço {medicineName} {dosage}
                    {quantity}
                    {medicineModifier}
                  </span>
                </a>
              </Stack>
            </Col>
          </Row>
        </Card>
      </div>
      <div className="my-3">
        <h6 className="text-center">
          Ver preços <FaArrowUp className="mb-1" />
        </h6>
      </div>
    </>
  );
}
