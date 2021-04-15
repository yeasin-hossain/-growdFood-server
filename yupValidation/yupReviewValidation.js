const yup = require('yup');

const errorMsg = {
  requiredFiled: 'The filed is required.',
};

module.exports.reviewValidationSchema = yup.object().shape({
  fullName: yup.string().trim().required(errorMsg.requiredFiled),
  userEmail: yup.string().trim().email().required(errorMsg.requiredFiled),
  review: yup.string().trim().min(2).max(250).required(errorMsg.requiredFiled),
});
