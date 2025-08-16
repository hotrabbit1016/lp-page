import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Envelope } from 'react-bootstrap-icons';

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
              <p className="text-muted mb-4">
                <Envelope size={20} className="me-2" />
                <a href="mailto:hotrabbit1016@gmail.com" className="text-decoration-none text-muted">
                  hotrabbit1016@gmail.com
                </a>
              </p>
              <p className="lead">
                "As an early DeFi adopter, I saw the potential of liquidity mining but also its complexity. High barriers to entry were hindering participation in this financial revolution."
              </p>
              <p>
                "I envisioned a platform to automate tedious yield farming tasks—tracking, rebalancing, security checks—while providing clear insights. It needed to be powerful for pros, yet simple for beginners."
              </p>
              <p>
                "That vision became YieldWise. It's a commitment to making decentralized finance accessible, empowering users to achieve their financial goals in this exciting landscape."
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FounderSection;