import gql from "graphql-tag";
const PIECES_QUERY = gql`
  query {
    portfolioPieces {
      id
      title
      imageAlt
      caption
      category
        pieceDetailText {
        html
      }
      thumbnail {
        id
        url
      }
      imagesMain {
        id
        url
        imageColSpan
        border
        imageMainAlt
      }
    }
    heroImgs {
      heroImgMain {
        url 
        id 
      }
    }
    introTexts {
      id
      introText 
    }
    aboutMes {
      id
      photos {
        url
        imageMainAlt
      }
      mainText {
        html
      }
      sideText {
        html
      }
      title 
    }
  }
`;

export default PIECES_QUERY;