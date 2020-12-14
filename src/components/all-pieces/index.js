import gql from "graphql-tag";
const PIECES_QUERY = gql`
  query {
    portfolioPieces {
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
        }
    }
    heroImgs {
      heroImgMain {
        url 
        id 
      }
    }
    introTexts {
      introText 
    }
  }
`;

export default PIECES_QUERY;