import React from "react";
import Banner from "../banner/Banner";
import { Accordion, Container } from "react-bootstrap";
import "./faqs.css";
import Section7 from '../home/Section7'

const Faqs = () => {
  return (
    <>
      <Banner tittle="Faq’s" smtittle="Faq’s" />
      <div className="accordiate">
        <Container>
        <Accordion >
          <Accordion.Item d eventKey="0">
            <Accordion.Header className="item">How Doctor Can Ease Your Pain?</Accordion.Header>
            <Accordion.Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="item">
            <Accordion.Header>How do I withdraw from a subject?</Accordion.Header>
            <Accordion.Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="item">
            <Accordion.Header>Understand Doctor Before You Regret</Accordion.Header>
            <Accordion.Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="item">
            <Accordion.Header>Understand Doctor Before You Regret</Accordion.Header>
            <Accordion.Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="item">
            <Accordion.Header>How Doctor Can Ease Your Pain?</Accordion.Header>
            <Accordion.Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Container>
      </div>
      <Section7 />
    </>
  );
};

export default Faqs;
