const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLFloat } = graphql;
const mongoose = require("mongoose");
const CategoryType = require("./types/category_type");
const ProductType = require("./types/product_type");
const Product = mongoose.model("products");
const Category = mongoose.model("categories");
const AuthService = require("../services/auth");
const UserType = require("./types/user_type")

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    verifyUser: {
      type: UserType,
      args: {
        token: { type: GraphQLString }
      },
      resolve(_, args) {
        return AuthService.verifyUser(args);
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(_, args) {
        return AuthService.login(args);
      }
    },
    logout: {
      type: UserType,
      args: {
        // all we need to log the user our is an id
        _id: { type: GraphQLID }
      },
      resolve(_, args) {
        return AuthService.logout(args);
      }
    },
    register: {
      type: UserType,
      args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(_, args) {
        return AuthService.register(args);
      }
    },
    newCategory: {
      type: CategoryType,
      args: { name: { type: GraphQLString } },
      resolve(parentValue, { name }) {
        const category = new Category({ name: name });
        return category.save()
      }
    },
    deleteCategory: {
      type: CategoryType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Category.remove({ _id: id})
      }
    },
    newProduct: {
      type: ProductType,
      args: { 
        // userId: { type: GraphQLID },
        categoryId: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        weight: { type: GraphQLFloat }
      },
      async resolve(parentValue, { categoryId, name, description, weight }, context) {
        // return new Product({ user: userId, category: categoryId, name, description, weight }).save();
        const validUser = await AuthService.verifyUser({token: context.token});
        if (validUser.loggedIn) {
          return Product.addProduct(categoryId, name, description, weight)
        } else {
          throw new Error("Must be logged in")
        }
      }
    },
    deleteProduct: {
      type: ProductType,
      args: { id: { type: GraphQLID} },
      resolve(_, { id } ) {
        return Product.remove({ _id: id } )
      }
    },
    updateProductCategory: {
      type: ProductType,
      args: { 
        productId: { type: GraphQLID },
        categoryId: { type: GraphQLID }
      },
      resolve(_, { productId, categoryId }) {
        return Product.updateProductCategory(productId, categoryId )
      }
    }

  }
});

module.exports = mutation;