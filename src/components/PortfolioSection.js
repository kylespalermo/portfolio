import React, {Component} from 'react';
import Piece from './Piece';

class PortfolioSection extends Component {
    render() {
        const items = this.props.items;
        return (
        <section className="portfolio-section">
            <h2>{this.props.name}</h2>
            {items.map((item, index) => <Piece key={item.id} itemGet={item} />)}
        </section>
        );
      }
    }


export default PortfolioSection; 