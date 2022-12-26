import { gql } from 'apollo-server-express';

export const QUERIES = gql`
  
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
        description
        authors
        image
        link
      }
    }
  }
`;