import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ShieldCheck, PieChart, ArrowRepeat } from 'react-bootstrap-icons';

const Feature = ({ icon, title, text }) => (
  <Col md={4} className="mb-4">
    <div className="card-style text-center">
      <div className="mb-3">{icon}</div>
      <h4>{title}</h4>
      <p className="text-muted">{text}</p>
    </div>
  </Col>
);

const FeaturesSection = () => {
  return (
    <section className="section" id="features">
      <Container>
        <h2 className="section-title">Why Choose YieldWise?</h2>
        <Row>
          <Feature
            icon={<PieChart size={50} className="text-success" />}
            title="All-in-One Dashboard"
            text="Track your entire liquidity portfolio, including APY, impermanent loss estimations, and total value, across multiple DeFi protocols. No more spreadsheets or manual tracking."
          />
          <Feature
            icon={<ArrowRepeat size={50} className="text-success" />}
            title="Automated Rebalancing"
            text="Our intelligent algorithms monitor the market and can automatically rebalance your assets between pools based on your chosen strategy, maximizing returns and managing risk."
          />
          <Feature
            icon={<ShieldCheck size={50} className="text-success" />}
            title="Security First"
            text="Your security is our priority. We utilize audited smart contracts and a non-custodial framework, meaning you always have full control over your funds."
          />
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;