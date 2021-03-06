import gql from "graphql-tag";


export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      loggedIn
    }
  }
`;

export const REGISTER_USER = gql`
  mutation RegisterUser($email: String!, $password: String!, $username: String!) {
    register(email: $email, password: $password, username: $username) {
      token
      loggedIn
    }
  }
`;

export const VERIFY_USER = gql`
  mutation VerifyUser($token: String!) {
    verifyUser(token: $token) {
      loggedIn
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($categoryId: ID!, $name: String!, $description: String!, $weight: Float!) {
    newProduct(categoryId: $categoryId, name: $name, description: $description, weight: $weight) {
      id
      category {
        name
      }
      name
      description
      weight
    }
  }`