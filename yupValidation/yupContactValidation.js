const yup = require('yup');

const errorMsg = {
  requiredFiled: 'The filed is required.',
};

module.exports.contactValidationSchema = yup.object().shape({
  userEmail: yup.string().trim().email().required(errorMsg.requiredFiled),
  query: yup.string().trim().min(2).max(250).required(errorMsg.requiredFiled),
});
