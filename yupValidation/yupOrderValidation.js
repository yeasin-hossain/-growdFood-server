const yup = require('yup');

const errorMsg = {
  requiredFiled: 'The filed is required.',
};

module.exports.orderValidationSchema = yup.object().shape({
  userId: yup.string().trim().required(errorMsg.requiredFiled),
  userEmail: yup.string().trim().email().required(errorMsg.requiredFiled),
  address: yup.string().trim().min(2).required(errorMsg.requiredFiled),
  quantity: yup.number().required(errorMsg.requiredFiled),
  productInfo: yup.object().shape({
    id: yup.string().trim().min(2).required(errorMsg.requiredFiled),
    name: yup.string().trim().min(2).required(errorMsg.requiredFiled),
    price: yup.number().required(errorMsg.requiredFiled),
    type: yup.string().trim().min(2).required(errorMsg.requiredFiled),
  }),
  cardId: yup.string().trim().min(2).required(errorMsg.requiredFiled),
  cardType: yup.string().trim().min(2).required(errorMsg.requiredFiled),
});
