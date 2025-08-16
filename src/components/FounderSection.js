import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const FounderSection = () => {
  return (
    <section className="section founder-section" id="founder">
      <Container>
        <h2 className="section-title">Meet the Founder</h2>
        <Row className="align-items-center">
          <Col md={5} className="text-center text-md-end mb-4 mb-md-0">
            <Image src={process.env.PUBLIC_URL + "/cofounder.jpeg"} roundedCircle className="founder-photo" />
          </Col>
          <Col md={7}>
            <div className="founder-bio">
              <h3>Jack Wu</h3>
              <p className="lead">
                "As an early DeFi adopter, I was fascinated by the potential of liquidity mining. But like many, I quickly found myself lost in a sea of complex interfaces, impermanent loss calculators, and dozens of browser tabs. The high barrier to entry wasn't just inconvenient; it was keeping people from participating in this financial revolution."
              </p>
              <p>
                "I knew there had to be a better way. I envisioned a single, elegant platform that could automate the tedious parts of yield farming—the tracking, the rebalancing, the security checks—while providing clear, actionable insights. It needed to be powerful enough for seasoned pros, yet simple enough for someone just starting out."
              </p>
              <p>
                "That vision became YieldWise. It's more than just a tool; it's a commitment to making decentralized finance truly accessible. My mission is to empower our users with the confidence and knowledge to achieve their financial goals in this exciting new landscape."
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FounderSection;