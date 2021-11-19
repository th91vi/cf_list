import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import { HeaderBreadcrumb } from "../components/Breadcrumb/Breadcrumb";
import { Filter } from "../components/Filter";
import { HeaderNavbar } from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>POC CliqueFarma</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderNavbar />
      <Container>
        <Row>
          <Col md={8}>
            <HeaderBreadcrumb />
            <Filter />
          </Col>
        </Row>
      </Container>
    </>
  );
}
