import React from 'react';
import { FETCH_CART_ITEMS } from '../graphql/queries';
import { Query, ApolloConsumer } from 'react-apollo';
import { withRouter } from 'react-router-dom';


const AddToCart = (props) => {
  return(
    <ApolloConsumer>
      {client => (
        <Query query={FETCH_CART_ITEMS}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            debugger;
            if (data.cart.find(obj => {
              return obj.id === props.id
            })) {
              // remove from cart
              return (
                <button 
                  onClick={e => {
                    e.preventDefault();
                    let newCart = data.cart.filter(item => item.id !== props.id);
                    // client.writeData({ data: { cart: newCart } });
                    client.writeQuery({
                      query: FETCH_CART_ITEMS,
                      data: {
                        cart: newCart
                      }
                    })
                    props.history.push(`/products/${props.match.params.id}`)
                  }}>
                  Remove from Cart
                </button>
              )
            } else {
              // add to cart              
              return (
                <button
                  onClick={e => {
                    e.preventDefault();
                    let newCart = data.cart.slice(0);
                    const newObj = {
                      id: props.id,
                      cost: props.cost,
                      __typename: "product"
                    };
                    newCart.push(newObj);
                    client.writeData({ data: { cart: newCart } });
                    props.history.push(`/products/${props.match.params.id}`)
                  }}>
                  Add to Cart
                </button>
              )
            }
          }}
        </Query>
      )}
    </ApolloConsumer>
  )
}

export default withRouter(AddToCart)