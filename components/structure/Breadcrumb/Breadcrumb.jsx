import Image from "next/image";
import {
  Breadcrumb,
  Row,
  Col,
  Stack,
  Form,
  FormControl,
  Card,
} from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { data } from "../../../data/data";

export function HeaderBreadcrumb() {
  const {
    product: { medicineName, dosage, medicineModifier },
  } = data;

  const activeDealsAmount = data.deals.reduce(
    (acc, c) => (c.active ? ++acc : acc),
    0
  );
  return (
    <Card border="primary" style={{ padding: "2rem 1rem" }}>
      <Row>
        <Col>
          <Row className="d-none d-sm-block">
            <Col>
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Stack direction="horizontal">
                    <span style={{ marginRight: "8px" }}>
                      <FaHome className="mb-1" />
                    </span>
                    <span>Home</span>
                  </Stack>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Medicamentos</Breadcrumb.Item>
                <Breadcrumb.Item>Disfunção Erétil</Breadcrumb.Item>
                <Breadcrumb.Item>Viagra</Breadcrumb.Item>
                <Breadcrumb.Item active>100mg 4 Comprimido(s)</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row className="d-none d-sm-block">
            <Col>
              <pre style={{ marginBottom: "0px" }}>PUBLICIDADE</pre>
              <Image
                src={"/banner-pre-bf-topo-dektop.png"}
                alt={"Economize ainda mais! Black Friday CliqueFarma"}
                width={720}
                height={90}
              />
            </Col>
          </Row>
          <Row className="d-block d-sm-none">
            <Col>
              <Form className="d-flex my-2">
                <FormControl
                  type="search"
                  placeholder="Busque por medicamento, substância, sintoma"
                />
              </Form>
            </Col>
          </Row>
          <Row className="my-1">
            <Col>
              <h5 style={{ textAlign: "center" }}>
                Menor preço de {medicineName} {dosage} {medicineModifier} você
                encontra no CliqueFarma
              </h5>
              <h6 style={{ textAlign: "center" }}>
                {activeDealsAmount} ofertas encontradas para {medicineName}{" "}
                {dosage} {medicineModifier}
              </h6>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
