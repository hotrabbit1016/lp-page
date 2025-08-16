import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {year} YieldWise. All Rights Reserved.</p>
      <p>
        <a href="#privacypolicy">Privacy Policy</a> | <a href="#terms">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;