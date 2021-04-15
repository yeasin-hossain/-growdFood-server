const yup = require('yup');

const errorMsg = {
  requiredFiled: 'The filed is required.',
};

module.exports.orderValidationSchema = yup.object().shape({
  userEmail: yup.string().trim().email().required(errorMsg.requiredFiled),
  productInfo: yup.object().shape({
    id: yup.string().trim().min(2).required(errorMsg.requiredFiled),
    name: yup.string().trim().min(2).required(errorMsg.requiredFiled),
    price: yup.number().required(errorMsg.requiredFiled),
    type: yup.string().trim().min(2).required(errorMsg.requiredFiled),
  }),
});
