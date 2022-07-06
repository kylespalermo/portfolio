import gql from "graphql-tag";
const PIECES_QUERY = gql`
  query {
    portfolioPieces(orderBy:orderValue_ASC) {
      id
      title
      imageAlt
      caption
      category
      client
      roles
      technologies
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
    introTexts {
      introText
      id
      photo {
        id
        url
      }
      resume {
        url
      }
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