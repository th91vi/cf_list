import Image from "next/image";
import {
  Card,
  Container,
  Button,
  Form,
  Row,
  Col,
  Stack,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

export function Footer() {
  return (
    <Container
      fluid
      className="mt-3 py-3"
      style={{ backgroundColor: "#434f57" }}
    >
      <footer>
        <Container>
          <Card className="p-3 mt-3">
            <p>
              Comparar preços de remédios e medicamentos no CliqueFarma é rápido
              e simples.
            </p>
            <p>
              O CliqueFarma, é uma ferramenta para{" "}
              <b>comparativo de preços de produtos farmacêuticos</b>. Não
              comercializamos, não indicamos, não receitamos, nenhum tipo de
              medicamento essa função cabe exclusivamente a médicos e
              farmacêuticos. Não consuma qualquer tipo de medicamento sem
              consultar seu médico.
            </p>
          </Card>
          <Card className="p-3 mt-3">
            <Row>
              <Col xs={12} md={6}>
                <h5 className="text-center">
                  <span>Quer receber ofertas exclusivas?</span>
                  <br />
                  <span>Subscreva a nossa newsletter!</span>
                </h5>
              </Col>
              <Col xs={12} md={6}>
                <Stack direction="horizontal" className="mt-2 d-none d-sm-flex">
                  <Form>
                    <Form.Control></Form.Control>
                  </Form>
                  <Button variant="success" size="ls">
                    Subscrever
                  </Button>
                </Stack>
                <div className="d-grid gap-2 d-block d-sm-none">
                  <Form>
                    <Form.Control></Form.Control>
                  </Form>
                  <Button variant="success" size="ls">
                    Subscrever
                  </Button>
                </div>
              </Col>
            </Row>
            <Row className="my-3">
              <Col md={3} className="my-2">
                <span>
                  <strong>CliqueFarma</strong>
                </span>
                <ul style={{ listStyleType: "none", paddingInlineStart: 0 }}>
                  <a href="#" title="Medicamentos">
                    <li>Medicamentos</li>
                  </a>
                  <a href="#" title="Lista de Medicamentos">
                    <li>Lista de Medicamentos</li>
                  </a>
                  <a href="#" title="Blog">
                    <li>Blog</li>
                  </a>
                  <a href="#" title="Drogarias">
                    <li>Drogarias</li>
                  </a>
                </ul>
              </Col>
              <Col md={3} className="my-2">
                <span>
                  <strong>Demais</strong>
                </span>
                <ul style={{ listStyleType: "none", paddingInlineStart: 0 }}>
                  <a href="#" title="Quem somos">
                    <li>Quem somos</li>
                  </a>
                  <a href="#" title="Fale conosco">
                    <li>Fale conosco</li>
                  </a>
                  <a href="#" title="Termos de uso">
                    <li>Termos de uso</li>
                  </a>
                  <a href="#" title="Central de ajuda">
                    <li>Central de ajuda</li>
                  </a>
                  <a href="#" title="Política de privacidade">
                    <li>Política de privacidade</li>
                  </a>
                  <a href="#" title="Proteção de dados">
                    <li>Proteção de dados</li>
                  </a>
                  <a href="#" title="Destaques">
                    <li>Destaques</li>
                  </a>
                  <a href="#" title="Cancelar alertas">
                    <li>Cancelar alertas</li>
                  </a>
                </ul>
              </Col>
              <Col md={6} className="my-2">
                <Row className="mb-3">
                  <Col xs={{ span: 1, offset: 4 }}>
                    <span>
                      <FaFacebookSquare size="2em" color="#46516b" />
                    </span>
                  </Col>
                  <Col xs={1}>
                    <span>
                      <FaTwitterSquare size="2em" color="#607e8b" />
                    </span>
                  </Col>
                  <Col xs={1}>
                    <span>
                      <FaYoutubeSquare size="2em" color="#723f3a" />
                    </span>
                  </Col>
                  <Col xs={1}>
                    <span>
                      <FaInstagramSquare size="2em" color="#516572" />
                    </span>
                  </Col>
                </Row>
                <Row>
                  <h6 className="text-center">
                    Estamos presentes nos seguintes países:
                  </h6>
                  <Col xs={{ span: 5, offset: 1 }} md={{ span: 3, offset: 3 }}>
                    🇧🇷 Brasil
                  </Col>
                  <Col xs={5} md={3}>
                    🇵🇹 Portugal
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <Image
                  width={140}
                  height={222}
                  alt="Mascote CliqueFarma"
                  src={"/boneco-footer.png"}
                />
              </Col>
              <Col md={10}>
                <p>
                  Todas as informações contidas neste site têm a intenção de
                  informar e educar, não pretendendo, de forma alguma,
                  substituir as orientações de um profissional médico ou servir
                  como recomendação para qualquer tipo de tratamento. Decisões
                  relacionadas a tratamento de pacientes devem ser tomadas por
                  profissionais autorizados, considerando as características de
                  cada paciente.
                </p>
                <p>
                  <strong>
                    SE PERSISTIREM OS SINTOMAS O MÉDICO DEVERÁ SER CONSULTADO.
                    PROCURE UM MÉDICO E O FARMACEUTICO. LEIA A BULA.
                  </strong>
                </p>
                <p>
                  O CliqueFarma não é um comércio eletrônico, apenas uma
                  ferramenta gratuita de comparação de preços entre produtos de
                  saúde. O CliqueFarma, não faz vendas de medicamentos.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 10, offset: 2 }}>
                <span>
                  Cliquefarma | CliqueFarma Drogarias Online Ltda. CNPJ
                  14.169.412/0001-64 | Farmacêutica Responsável: Thalita Carla
                  de Carvalho Lima CRF/SP 85.219 | Rua Voluntários da Pátria,
                  2.820 - Conjunto 58 Cep: 02402-100 - São Paulo |{" "}
                  <a
                    href="https://www.cliquefarma.com.br/contato"
                    title="Fale Conosco"
                  >
                    Fale Conosco
                  </a>
                </span>
              </Col>
            </Row>
          </Card>
          <div className="pt-2">
            <span style={{ color: "white" }}>
              &copy; 2012 - 2021 Cliquefarma - Todos os direitos reservados.
            </span>
          </div>
        </Container>
      </footer>
    </Container>
  );
}
