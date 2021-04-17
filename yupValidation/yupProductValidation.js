const yup = require('yup');

const errorMsg = {
  requiredFiled: 'The filed is required.',
};

module.exports.productValidationSchema = yup.object().shape({
  name: yup.string().trim().min(2).required(errorMsg.requiredFiled),
  price: yup.number().required(errorMsg.requiredFiled),
  type: yup.string().trim().min(2).required(errorMsg.requiredFiled),
  description: yup.string().trim().min(2).required(errorMsg.requiredFiled),
  imageUrl: yup.string().trim().min(2).required(errorMsg.requiredFiled),
});
