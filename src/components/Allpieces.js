import React from 'react';
import PortfolioSection from './PortfolioSection';

const Allpieces = (props) => {
  const professional = [];
  const explorations = [];
  props.pieces.forEach(piece => {
    if (piece.category === "personal") {
      explorations.push(piece);
      } else if (piece.category === "professional") {
        professional.push(piece);
        }
      });
    return (
      <section className="portfolio">
        <h1>Portfolio</h1>
        <PortfolioSection key="professional" name="Professional" items={professional}></PortfolioSection>
        <PortfolioSection key="explorations" name="Explorations" items={explorations}></PortfolioSection>
      </section>
        );
    }

export default Allpieces; 