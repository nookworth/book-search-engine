import { gql } from 'apollo-server-express';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
     token
     User {
        _id
        username
        email
        bookCount
        savedBooks
     }
    }
  }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            User {
                _id
                username
                email
                bookCount
                savedBooks
            }
        }
    }`;

export const SAVE_BOOK = gql`
mutation saveBook($username: String!, $criteria: SaveBookInput!) {
    saveBook(username: $username, criteria: $criteria) {
        User {
            _id
            username
            email
            bookCount
            savedBooks
        }
    }
}`;

export const REMOVE_BOOK = gql`
mutation removeBook($username: String!, $bookId: String!) {
    removeBook(username: $username, bookId: $bookId) {
        User {
            _id
            username
            email
            bookCount
            savedBooks
        }
    }
}`

