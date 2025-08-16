import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AutomatedRebalancingSection = () => {
  return (
    <section className="section automated-rebalancing-section" id="automated-rebalancing">
      <Container>
        <h2 className="section-title">Automated Rebalancing</h2>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <p className="lead">
              Intelligently manage your investment portfolio, automatically adjusting asset ratios to optimize returns and reduce risk.
            </p>
            <div className="rebalancing-diagram mt-5 mb-5">
              <svg width="300" height="200" viewBox="0 0 300 200">
                {/* Unbalanced Scale */}
                <line x1="50" y1="100" x2="250" y2="80" stroke="#666" stroke-width="3" /> {/* Arm */}
                <circle cx="150" cy="100" r="5" fill="#333" /> {/* Pivot */}
                <rect x="40" y="110" width="30" height="30" fill="#f44336" /> {/* Left weight */}
                <text x="55" y="130" text-anchor="middle" fill="white" font-size="12">A</text>
                <rect x="230" y="90" width="30" height="30" fill="#2196f3" /> {/* Right weight */}
                <text x="245" y="110" text-anchor="middle" fill="white" font-size="12">B</text>
                <text x="150" y="160" text-anchor="middle" font-size="14">Unbalanced</text>

                {/* Arrow for Rebalancing */}
                <line x1="150" y1="170" x2="150" y2="190" stroke="black" stroke-width="2" marker-end="url(#arrowhead)" />
                <text x="160" y="180" font-size="12">Rebalance</text>

                {/* Define arrowhead marker */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" />
                  </marker>
                </defs>
              </svg>
              <p className="text-muted mt-3">
                Illustration: The system automatically monitors and adjusts your asset ratios, ensuring your portfolio always aligns with your strategy.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AutomatedRebalancingSection;