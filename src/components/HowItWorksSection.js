import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Step = ({ number, title, text }) => (
  <Col md={4} className="mb-4">
    <div className="card-style text-center">
      <div className="step-circle">{number}</div>
      <h5>{title}</h5>
      <p className="text-muted">{text}</p>
    </div>
  </Col>
);

const HowItWorksSection = () => {
  return (
    <section className="section how-it-works-section" id="how-it-works">
      <Container>
        <h2 className="section-title">Get Started in 3 Simple Steps</h2>
        <Row>
          <Step number="1" title="Connect Your Wallet" text="Securely connect your wallet in seconds. We are non-custodial, so you never give up control or ownership of your private keys." />
          <Step number="2" title="Choose a Pool" text="Browse our curated and vetted list of liquidity pools. We provide key data like historical APY and risk scores to help you make informed decisions." />
          <Step number="3" title="Deposit & Earn" text="Once you deposit, our dashboard comes to life. Watch your earnings grow in real-time and manage your positions effortlessly from one place." />
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorksSection;