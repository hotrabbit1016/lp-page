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
              <svg width="400" height="300" viewBox="0 0 400 300">
                {/* Define arrowhead marker */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" />
                  </marker>
                </defs>

                {/* Initial State */}
                <rect x="100" y="20" width="200" height="50" fill="#e0f7fa" stroke="#00bcd4" stroke-width="2" rx="10" ry="10" />
                <text x="200" y="50" text-anchor="middle" font-size="16">Initial Portfolio (60% A, 40% B)</text>

                {/* Arrow 1 */}
                <line x1="200" y1="70" x2="200" y2="100" stroke="black" stroke-width="2" marker-end="url(#arrowhead)" />
                <text x="210" y="85" font-size="12">Market Fluctuation</text>

                {/* Fluctuated State */}
                <rect x="100" y="110" width="200" height="50" fill="#ffe0b2" stroke="#ff9800" stroke-width="2" rx="10" ry="10" />
                <text x="200" y="140" text-anchor="middle" font-size="16">Fluctuated Portfolio (75% A, 25% B)</text>

                {/* Arrow 2 */}
                <line x1="200" y1="160" x2="200" y2="190" stroke="black" stroke-width="2" marker-end="url(#arrowhead)" />
                <text x="210" y="175" font-size="12">Automated Rebalancing</text>

                {/* Rebalanced State */}
                <rect x="100" y="200" width="200" height="50" fill="#c8e6c9" stroke="#4caf50" stroke-width="2" rx="10" ry="10" />
                <text x="200" y="230" text-anchor="middle" font-size="16">Rebalanced Portfolio (60% A, 40% B)</text>
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