import Image from "next/image";
import { Breadcrumb, Row, Col, Stack } from "react-bootstrap";
import { FaHome } from "react-icons/fa";

export function HeaderBreadcrumb() {
  return (
    <>
      <Row>
        <Col md={8}>
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
      <Row>
        <Col md={8}>
          <pre style={{ marginBottom: "0px" }}>PUBLICIDADE</pre>
          <Image
            src={"/banner-pre-bf-topo-dektop.png"}
            alt={"Economize ainda mais! Black Friday CliqueFarma"}
            width={720}
            height={90}
          />
        </Col>
      </Row>
    </>
  );
}
