import gql from "graphql-tag";
const PIECES_QUERY = gql`
  query {
    portfolioPieces {
      title
        imageAlt
        caption
        category
        thumbnail {
          id
          url
        }
        imagesMain {
          id
          url
          imageColSpan
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