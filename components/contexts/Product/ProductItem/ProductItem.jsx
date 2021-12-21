import Image from "next/image";
import { Card, Row, Col, Button, Stack } from "react-bootstrap";
import { FaShoppingBasket } from "react-icons/fa";

export function ProductItem({
  deal: {
    medicineName,
    dosage,
    manufacturer,
    medicineModifier,
    price,
    pharmacyName,
    logo,
    callToAction,
    id,
  },
}) {
  return (
    <Card className="mt-3 py-2 px-1">
      <Row>
        <Col xs={3} md={2}>
          <Card>
            <Image
              src={"http://localhost:8080/product/image.png"}
              width={90}
              height={34}
              alt={`Logo ${pharmacyName}`}
            />
            <small>{pharmacyName}</small>
          </Card>
        </Col>
        <Col>
          <Row>
            <Col>
              <h6>
                {`${medicineName} ${dosage} ${manufacturer} ${medicineModifier}
                na ${pharmacyName}`}
              </h6>
              <small>{callToAction}</small>
              <p>{id}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6 className="text-center">Preço</h6>
              <h5 className="text-center">R${price}</h5>
              <Stack direction="horizontal">
                <Button variant="success mx-auto">
                  <span>
                    <FaShoppingBasket style={{ marginRight: "8px" }} />{" "}
                    <small>
                      <a
                        href="#"
                        title="IR PARA LOJA"
                        target="_blank"
                        rel="noopener"
                      >
                        IR PARA LOJA
                      </a>
                    </small>
                  </span>
                </Button>
              </Stack>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
