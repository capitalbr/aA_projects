import React from 'react';
import { Query } from "react-apollo";
import { FETCH_PRODUCT } from "../../graphql/queries";
import { Link } from "react-router-dom";
import AddToCart from "../AddToCart";

const ProductDetail = (props) => {
  return (
    <Query query={FETCH_PRODUCT} variables={{ id: props.match.params.id }} >
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
          <div>
            <h1>{data.product.name}</h1>
            <h2>Weight: </h2><span>{data.product.weight}</span>
            <h2>Category: </h2><span>{data.product.category.name}</span>
            <h2>Cost: </h2><span>{data.product.cost} </span>
            <h2>Description:</h2>
            <p>{data.product.description}</p>
            <AddToCart id={data.product.id} cost={data.product.cost}/>
            <Link to="/">Index</Link>
          </div>
        );
      }}
    </Query>
  );
};

export default ProductDetail