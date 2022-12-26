import { gql } from 'apollo-server-express';

export const GET_ME = gql`
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
        link
        image
      }
    }
  }
`;