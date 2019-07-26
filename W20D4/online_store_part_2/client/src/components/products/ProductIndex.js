import React from 'react';
import { Query } from "react-apollo";
import { Link } from 'react-router-dom';
import { FETCH_PRODUCTS } from "../../graphql/queries";

const ProductIndex = () => {
  return (
    <Query query={FETCH_PRODUCTS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
          <ul>
            {data.products.map(product => (
              <li key={product.id}>
                <Link to={`/products/${product.id}`}>
                  {product.name}
                </Link>
                {product.description}
                
              </li>
            ))}
          </ul>
        );
      }}
    </Query>
  );
};

export default ProductIndex