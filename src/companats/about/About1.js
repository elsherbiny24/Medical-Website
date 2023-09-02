import React from "react";
import "./about1.css";
import { Col, Container, Row } from "react-bootstrap";

const About1 = () => {
  return (
    <>
      <section className="about-1">
        <Container className="contanue">
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="boxs-about shadow">
                <h5>120</h5>
                <h4>years with you</h4>
                <p>
                  Etiam ante ante, molestie vitae cursus ac, pharetra euismod
                  libero.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="boxs-about shadow">
              <h5>400</h5>
                <h4>awards</h4>
                <p>
                  Etiam ante ante, molestie vitae cursus ac, pharetra euismod
                  libero.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="boxs-about shadow">
              <h5>250</h5>
                <h4>Doctors</h4>
                <p>
                  Etiam ante ante, molestie vitae cursus ac, pharetra euismod
                  libero.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="boxs-about shadow">
              <h5>800</h5>
                <h4>Satisfied Client</h4>
                <p>
                  Etiam ante ante, molestie vitae cursus ac, pharetra euismod
                  libero.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About1;
