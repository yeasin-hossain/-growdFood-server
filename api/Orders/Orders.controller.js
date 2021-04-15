const Orders = require('../../model/Order.model');
const Products = require('../../model/Products.model');
const { orderValidationSchema } = require('../../yupValidation/yupOrderValidation');

// eslint-disable-next-line consistent-return
module.exports.saveOrder = async (req, res, next) => {
  const product = req.body;
  try {
    const isValid = await orderValidationSchema.isValid(product, {
      abortEarly: false,
    });
    if (!isValid) {
      return res.status(200).json({ message: 'invalid order Information' });
    }
    const { id } = product.productInfo;
    const isProductInStock = await Products.findById(id);
    if (isProductInStock) {
      if (!isProductInStock.stock) {
        return res.status(200).json({ message: 'Sorry This Product Not Available In Stock' });
      }
    }
    const saveOrder = await Orders.create(product);
    if (!saveOrder) {
      return res.status(200).json({ message: 'Sorry Something Wants Wrong, Try Again' });
    }
    res.status(200).json(saveOrder);
  } catch (err) {
    next(err);
  }
};

// eslint-disable-next-line consistent-return
module.exports.changeStatus = async (req, res, next) => {
  const { orderId } = req.params;
  const { status } = req.body;
  try {
    const updateStatus = await Orders.findByIdAndUpdate(orderId, { status });

    if (updateStatus) {
      const updatedOrder = await Orders.findById(orderId);
      res.status(200).json(updatedOrder);
    }
  } catch (err) {
    next(err);
  }
};

// eslint-disable-next-line consistent-return
module.exports.orderDelete = async (req, res, next) => {
  const { orderId } = req.params;
  try {
    const deletedOrder = await Orders.findByIdAndRemove(orderId);
    if (!deletedOrder) {
      return res.status(200).json({ message: 'Sorry No Order Found' });
    }
    res.status(200).json(deletedOrder);
  } catch (err) {
    next(err);
  }
};

// eslint-disable-next-line consistent-return
module.exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Orders.find({});
    if (!orders) {
      return res.status(404).json({ message: 'No Product Available' });
    }
    res.status(200).json({ orders });
  } catch (err) {
    next(err);
  }
};
