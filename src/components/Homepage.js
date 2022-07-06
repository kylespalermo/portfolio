import React, {Component} from 'react';
import PIECES_QUERY from './all-pieces/index';
import { Query } from 'react-apollo';
import Intro from './Intro';
import Allpieces from './Allpieces';
import HeroAnimation from './HeroAnimation';

class Homepage extends Component {

  render() {
    return (
      <Query query={PIECES_QUERY}>
        {({ loading, error, data }) => {

          if (loading) return <div>this should just take a sec</div>
          if (error) return <div>my bad, something went wrong</div>

          const pieces = data.portfolioPieces;
          const introtexts = data.introTexts;

          return (
            <main>
                <HeroAnimation></HeroAnimation>
                {introtexts.map(intro => <Intro key={intro.id} introGet={intro} />)}
                <Allpieces pieces={pieces}></Allpieces>
                <p className="back-matter">Built with love using <a href="https://reactjs.org/">React</a> & <a href="https://graphcms.com/">GraphCMS</a>. Typeset with <a href="http://www.basteleur.keussel.studio/">Basteleur</a> and <a href="https://fonts.google.com/specimen/Space+Grotesk">Space Grotesk</a>.<br/>
                &copy; 2022 Kyle Palermo. All rights reserved.
                </p>
            </main>
          )
        }}
      </Query>
    );
  }
};
export default Homepage;