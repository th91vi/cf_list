import { Accordion, Stack, Card, Row, Col } from "react-bootstrap";
import { FaArrowUp, FaDollarSign, FaFile, FaSearch } from "react-icons/fa";
import { ProductHighlight } from "../ProductHighlight";
import { data } from "../../../../data/data";
import { ProductPackageInsert } from "../ProductPackageInsert";
import { OfferItem } from "../OfferItem";

export const OfferListing = ({ offers }) => {
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
                {offers[0].medicineName} {offers[0].dosage}{" "}
                {offers[0].medicineModifier}
              </span>
            </Stack>
          </Accordion.Header>
          <Accordion.Body>
            <ProductHighlight />
            <h2 className="text-center my-3">Ofertas encontradas</h2>
            {offers.map((offer, index) => (
              <OfferItem key={index} offer={offer} />
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
                <a
                  href="#"
                  title={`Bula ${offers[0].medicineName} ${offers[0].dosage} ${offers[0].quantity}`}
                  target="_blank"
                  rel="noopener"
                >
                  <span>
                    <FaFile /> Bula {offers[0].medicineName} {offers[0].dosage}{" "}
                    {offers[0].quantity}
                    {offers[0].medicineModifier}
                  </span>
                </a>
                <a
                  href="#"
                  title={`Menor preço ${offers[0].medicineName} ${offers[0].dosage} ${offers[0].quantity} ${offers[0].medicineModifier}`}
                  target="_blank"
                  rel="noopener"
                >
                  <span>
                    <FaDollarSign /> Menor preço {offers[0].medicineName}{" "}
                    {offers[0].dosage}
                    {offers[0].quantity}
                    {offers[0].medicineModifier}
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
      <ProductPackageInsert product={data.product} />
    </>
  );
};
