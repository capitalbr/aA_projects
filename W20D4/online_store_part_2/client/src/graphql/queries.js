import gql from "graphql-tag";

export const FETCH_CATEGORIES = gql`
  {
    categories {
      id
      name
    }
  }
`;

export const FETCH_PRODUCTS = gql`
  {
    products {
      id
      name
      description
    }
  }
`;

export const FETCH_PRODUCT = gql`
  query FetchProduct($id: ID!) {
    product(_id: $id) {
      id,
      name,
      description,
      category {
        name
      },
      weight,
      cost
    }
  }
`;

export const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
  `;

export const FETCH_CART_ITEMS = gql`
  query FetchCartItems {
    cart @client {
      cost
      id  
    }
  }

`;