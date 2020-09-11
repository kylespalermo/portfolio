import React, { Component } from 'react';
import { Query } from 'react-apollo';
import PIECES_QUERY from './all-pieces/index';
import Piece from './Piece';
import Hero from './Hero';
import IntroText from './IntroText';

class Allpieces extends Component {
  
  render() {
    return (
      <Query query={PIECES_QUERY}>
       {({ loading, error, data }) => {

          if (loading) return <div>this should just take a sec</div>
          if (error)   return <div>my bad, something went wrong</div>

          const pieces = data.portfolioPieces;
          const heros = data.heroImgs;
          const introtexts = data.introTexts;

          return (
            <div>
              <div className = "main-wrapper">
                <div className = "content-wrapper one">
                  <div className = "header">
                    <div className = "header-text">
                      Kyle<br/>Palermo
                    </div>
                  </div>
                  <div className = "nav-links-wrapper">
                    <div className = "nav-links">
                      <p>
                        <a href="">CV</a><br/>
                        <a href="">Writing</a><br/>
                        <a href="">Photos</a><br/>
                        <span className = "nav-link-scroll">Design Work</span><br/>
                        <span>///////</span>
                      </p>
                    </div>
                  </div>
                  <div className = "intro-text-wrapper">
                    <div className = "intro-text">
                      {introtexts.map(intro => <IntroText key={intro.toString()} introTextGet={intro} />)}
                    </div>
                  </div>
                  <div className = "hero-image-wrapper">
                    {heros.map(hero => <Hero key={hero.toString()} heroImg={hero} />)}
                  </div>
                </div>
                <div className ="content-wrapper two">              
                  {pieces.map(piece => <Piece key={piece.toString()} portfolioItem={piece} />)}
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