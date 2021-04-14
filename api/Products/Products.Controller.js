const Products = require('../../model/Products.model');
const { productValidationSchema } = require('../../yupValidation/yupProductValidation');

// eslint-disable-next-line consistent-return
module.exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Products.find({});
    if (!products) {
      return res.status(404).json({ message: 'No Product Available' });
    }
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
};

// eslint-disable-next-line consistent-return
module.exports.saveProduct = async (req, res, next) => {
  const product = req.body;
  try {
    // Check User Provide Data valid Or not
    const isValid = await productValidationSchema.isValid(product, {
      abortEarly: false,
    });

    if (!isValid) {
      return res.status(501).json({ message: 'Validation Error' });
    }
    const Product = await Products.create(product);

    // Send Final Data
    res.status(200).json(Product);
  } catch (err) {
    next(err);
  }
};

// eslint-disable-next-line consistent-return
module.exports.productType = async (req, res, next) => {
  const { type } = req.params;
  try {
    const products = await Products.find({ type });
    if (products.length === 0) {
      // Send Final Data
      return res.status(200).json({ message: 'Sorry No Product Found' });
    }
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

// eslint-disable-next-line consistent-return
module.exports.productDelete = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const deletedProduct = await Products.findByIdAndRemove(productId);
    if (!deletedProduct) {
      return res.status(200).json({ message: 'Sorry No Product Found' });
    }
    res.status(200).json(deletedProduct);
  } catch (err) {
    next(err);
  }
};

// eslint-disable-next-line consistent-return
module.exports.updateStock = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await Products.findById({ _id: productId });

    if (product) {
      const updateStock = await Products.findByIdAndUpdate(productId, { stock: !product.stock });

      if (updateStock) {
        const updatedProduct = await Products.findById({ _id: productId });
        res.status(200).json(updatedProduct);
      }
    }
  } catch (err) {
    next(err);
  }
};
