import Image from "next/image";
import {
  Container,
  Navbar,
  Row,
  Col,
  Form,
  FormControl,
  Stack,
  Dropdown,
} from "react-bootstrap";
import {
  FaBars,
  FaSignInAlt,
  FaHome,
  FaBullhorn,
  FaPlusSquare,
  FaList,
  FaPencilAlt,
  FaUsers,
  FaEnvelope,
  FaTrophy,
} from "react-icons/fa";

export function HeaderNavbar() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Container>
          <Row>
            <Col xs={6} md={2}>
              <Navbar.Brand>
                <Image
                  src="/logo-desktop.png"
                  alt="Logo CliqueFarma"
                  width={200}
                  height={70}
                />
              </Navbar.Brand>
            </Col>
            <Col md={6} className="d-none d-sm-block">
              <Form className="d-flex my-2">
                <FormControl
                  type="search"
                  placeholder="Busque por medicamento, substância, sintoma"
                />
              </Form>
            </Col>
            <Col xs={6} md={{ span: 2, offset: 2 }}>
              <Row>
                <Col xs={6} md={2}>
                  <Stack direction="horizontal" className="my-2">
                    <span>Entrar</span>
                    <span style={{ marginLeft: "8px" }}>
                      <FaSignInAlt />
                    </span>
                  </Stack>
                </Col>
                <Col xs={6} md={8}>
                  <Row>
                    <Col md={{ span: 6, offset: 6 }}>
                      <Dropdown drop="start">
                        <Dropdown.Toggle aria-label="menu">
                          <FaBars />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#">
                            <Stack direction="horizontal" className="my-1">
                              <span style={{ marginRight: "8px" }}>
                                <FaHome />
                              </span>
                              <span>Home</span>
                            </Stack>
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <Stack direction="horizontal" className="my-1">
                              <span style={{ marginRight: "8px" }}>
                                <FaBullhorn />
                              </span>
                              <span>
                                <i>Campanha: </i>
                                <strong>Black Friday</strong>
                              </span>
                            </Stack>
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <Stack direction="horizontal" className="my-1">
                              <span style={{ marginRight: "8px" }}>
                                <FaPlusSquare />
                              </span>
                              <span>Medicamentos</span>
                            </Stack>
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <Stack direction="horizontal" className="my-1">
                              <span style={{ marginRight: "8px" }}>
                                <FaList />
                              </span>
                              <span>Lista de Medicamentos</span>
                            </Stack>
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <Stack direction="horizontal" className="my-1">
                              <span style={{ marginRight: "8px" }}>
                                <FaPencilAlt />
                              </span>
                              <span>Blog</span>
                            </Stack>
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <Stack direction="horizontal" className="my-1">
                              <span style={{ marginRight: "8px" }}>
                                <FaUsers />
                              </span>
                              <span>Quem Somos</span>
                            </Stack>
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <Stack direction="horizontal" className="my-1">
                              <span style={{ marginRight: "8px" }}>
                                <FaEnvelope />
                              </span>
                              <span>Fale Conosco</span>
                            </Stack>
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <Stack direction="horizontal" className="my-1">
                              <span style={{ marginRight: "8px" }}>
                                <FaTrophy />
                              </span>
                              <span>Destaques</span>
                            </Stack>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </Navbar>
  );
}
