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
              <svg width="400" height="250" viewBox="0 0 400 250">
                {/* Scale Base */}
                <rect x="180" y="200" width="40" height="10" fill="#666" rx="3" ry="3" />
                <polygon points="190 200, 210 200, 200 180" fill="#666" /> {/* Triangle support */}

                {/* Pivot */}
                <circle cx="200" cy="180" r="6" fill="#999" />

                {/* Arms */}
                <line x1="80" y1="180" x2="320" y2="180" stroke="#999" stroke-width="4" stroke-linecap="round" />

                {/* Unbalanced State - Left Pan (lower) */}
                <circle cx="100" cy="195" r="30" fill="#f44336" opacity="0.8" />
                <text x="100" y="200" text-anchor="middle" fill="white" font-size="16" font-weight="bold">A</text>
                <text x="100" y="220" text-anchor="middle" fill="white" font-size="12">75%</text>

                {/* Unbalanced State - Right Pan (higher) */}
                <circle cx="300" cy="165" r="30" fill="#2196f3" opacity="0.8" />
                <text x="300" y="170" text-anchor="middle" fill="white" font-size="16" font-weight="bold">B</text>
                <text x="300" y="190" text-anchor="middle" fill="white" font-size="12">25%</text>

                {/* Arrow for Rebalancing */}
                <line x1="200" y1="100" x2="200" y2="140" stroke="#00bfa6" stroke-width="3" marker-end="url(#arrowhead)" />
                <text x="210" y="120" font-size="14" fill="#00bfa6">Rebalance</text>

                {/* Define arrowhead marker */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#00bfa6" />
                  </marker>
                </defs>
              </svg>
              <p className="text-muted mt-3">
                This balance scale diagram illustrates the principle of automated rebalancing: When the proportions of assets in your portfolio, such as 'Asset A' and 'Asset B', become 'unbalanced' due to market fluctuations (e.g., shifting from an ideal 60% A, 40% B to 75% A, 25% B), the system automatically performs a 'rebalancing' operation to adjust the asset proportions back to your preset ideal state, maintaining portfolio stability and optimizing returns.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AutomatedRebalancingSection;