import React, { Component } from 'react';
import { Query } from 'react-apollo';
import PIECES_QUERY from './all-pieces/index';
import Piece from './Piece';
// import Hero from './Hero';
import IntroText from './IntroText';
import NameBanner from './NameBanner';

class Allpieces extends Component {
  
  render() {
    return (
      <Query query={PIECES_QUERY}>
       {({ loading, error, data }) => {

          if (loading) return <div>this should just take a sec</div>
          if (error)   return <div>my bad, something went wrong</div>

          const pieces = data.portfolioPieces;
          const introtexts = data.introTexts;

          return (
            <div>
              <div className = "main-wrapper">
                <div className = "content-wrapper one">
                  <div className = "nav-links-wrapper">
                    <div className = "nav-link">
                        <a className = "bigLink" href="https://drive.google.com/file/d/1q734iPWstp0x__i-SOYPF3tTDD3ca1EH/view">CV</a><br/>
                    </div>
                    <div className = "nav-link">
                        <a className = "bigLink" href="https://kpalermo.myportfolio.com/writing">Writing</a><br/>
                    </div>
                    <div className = "nav-link">
                        <a className = "bigLink" href="https://kpalermophoto.myportfolio.com/">Photo</a><br/>
                    </div>
                    <div className = "nav-link" id="scroll">
                        <span>Design Work</span><br/>
                    </div>
                  </div>
                  <div className = "navArrow"></div>
                  <div className = "intro-text-wrapper">
                    <div className = "intro-text">
                      {introtexts.map(intro => <IntroText key={intro.toString()} introTextGet={intro} />)}
                    </div>
                  </div>
                  <div className = "hero-image-wrapper">
                    <NameBanner></NameBanner>
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