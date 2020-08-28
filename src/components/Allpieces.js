import React, { Component } from 'react';
import { Query } from 'react-apollo';
import PIECES_QUERY from './all-pieces/index';
import Piece from './Piece';
import Navbar from './Navbar';
import Hero from './Hero';

class Allpieces extends Component {
  
  render() {
    return (
      <Query query={PIECES_QUERY}>
       {({ loading, error, data }) => {

          if (loading) return <div>Fetching pieces.....</div>
          if (error)   return <div>Error fetching pieces</div>

          const pieces = data.portfolioPieces;
          const heros = data.heroImgs;

          return (
            <div>
              <Navbar/>
              <div className = "main-wrapper">
                <div className = "content-wrapper">
                  <div className = "hero-image-wrapper">
                    {heros.map(hero => <Hero key={hero.toString()} heroImg={hero} />)}
                  </div>
                  <div className ="image-grid-wrapper">              
                    {pieces.map(piece => <Piece key={piece.toString()} portfolioItem={piece} />)}
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </Query>
    );
  }
};
export default Allpieces;