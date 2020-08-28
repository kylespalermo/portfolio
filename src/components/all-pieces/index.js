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
            }
      }
      heroImgs {
            heroImgMain {
            url 
            id 
            }
          }
      }
`;

export default PIECES_QUERY;