const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat, GraphQLInt } = graphql;
const Category = mongoose.model("categories");
const CategoryType = require("./category_type");

const ProductType = new GraphQLObjectType({
  name: "ProductType",
  // remember we wrap the fields in a thunk to avoid circular dependency issues
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    category: {
      type: CategoryType,
      resolve(parentValue) {
        return Category.findById(parentValue.category)
          .then(category => category)
          .catch(err => null)
      }
    },
    description: { type: GraphQLString },
    weight: { type: GraphQLFloat},
    cost: { type: GraphQLInt }
  })
});

module.exports = ProductType;