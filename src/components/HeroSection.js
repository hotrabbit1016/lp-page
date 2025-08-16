import React from 'react';
import { Container, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <header className="hero-section" id="home">
      <Container>
        <h1 className="display-4">Smart Liquidity Mining, Simplified.</h1>
        <p className="lead">
          智能平台，輕鬆管理並最大化您的流動性挖礦收益。
        </p>
        <Button size="lg" className="btn-primary-custom">Get Started</Button>
      </Container>
    </header>
  );
};

export default HeroSection;