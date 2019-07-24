

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "categories"
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: false
  }
});

ProductSchema.statics.addProduct = (categoryId, name, description, weight) => {
  const Product = mongoose.model("products");
  const Category = mongoose.model("categories");
  // const User = mongoose.model("users");
  return Category.findById(categoryId)
    .then(category => {
      // return User.findById(userId)
        // .then(user => {
          
          return new Product({ category: categoryId, name, description, weight }).save()
            .then(product => {
              category.products.push(product._id);
              category.save();
              return product
            });
        // })
    })
  
};

ProductSchema.statics.updateProductCategory = (productId, categoryId) => {
  const Product = mongoose.model("products");
  const Category = mongoose.model("categories");

  return Product.findById(productId).then(product => {
    // if the product already had a category
    if (product.category) {
      // find the old category and remove this product from it's products
      Category.findById(product.category).then(oldcategory => {
        oldcategory.products.pull(product);
        return oldcategory.save();
      });
    }
    //  find the Category and push this product in, as well as set this product's category
    return Category.findById(categoryId).then(newCategory => {
      product.category = newCategory;
      newCategory.products.push(product);

      return Promise.all([product.save(), newCategory.save()]).then(
        ([product, newCategory]) => product
      );
    });
  });
};

module.exports = mongoose.model("products", ProductSchema);

// GodSchema.statics.updateAbode = (godId, abodeId) => {
//   const God = mongoose.model("god");
//   const Abode = mongoose.model("abode");

//   return God.findById(godId).then(god => {
//     god.abode = abodeId
//     return Abode.findById(abodeId).then(abode => {
//       abode.gods.push(godId);
//       return Promise.all([god.save(), abode.save()]).then(
//         ([god, emblem]) => god
//       )
//     })
//   })
// }

// GodSchema.statics.addEmblem = (godId, emblemId) => {
//   const God = mongoose.model("god");
//   const Emblem = mongoose.model("emblem");

//   return God.findById(godId).then(god => {
//     return Emblem.findById(emblemId).then(emblem => {
//       god.emblems.push(emblemId);
//       emblem.gods.push(godId);

//       return Promise.all([god.save(), emblem.save()]).then(
//         ([god, emblem]) => god
//       );
//     })
//   });
// };