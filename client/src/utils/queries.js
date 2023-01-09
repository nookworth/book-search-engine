import { gql } from 'apollo-server-express';

export const GET_ME = gql`
  query GET_ME {
    me {
      User {
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
}
`;