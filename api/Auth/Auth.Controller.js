/* eslint-disable radix */
const { genSaltSync, hash, compare } = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../../model/User.model');
const {
  userValidationSchema,
  loginUserValidationSchema,
} = require('../../yupValidation/yupUserValidation');

// eslint-disable-next-line consistent-return
module.exports.login = async (req, res, next) => {
  const userCredentials = req.body;
  try {
    const { email, password } = userCredentials;

    // validation
    const isValid = loginUserValidationSchema.isValid(userCredentials, {
      abortEarly: false,
    });
    if (!isValid) {
      return res.status(200).json({ message: 'invalid credentials' });
    }

    // Get User From Server
    const singUser = await Users.findOne({ email });
    if (!singUser) {
      return res.status(200).json({ message: 'User Not Found' });
    }

    // Compare password with user given password
    const validatePassword = await compare(password, singUser.password);
    if (!validatePassword) {
      return res.status(200).json({ message: 'Email Or Password Not Match' });
    }
    // Check User Ban Or not
    if (singUser.ban) {
      return res.status(200).json({ message: 'User Is Ban From Our Service' });
    }

    // making payload for JWT
    const { _id: id, fullName: name, email: userEmail, role, ban } = singUser;
    const payload = {
      id,
      name,
      userEmail,
      role,
      ban,
    };

    // Create Jwt Token
    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1day',
    });
    // Send Final Data and User Signed Successfully
    res.status(200).json({ ...payload, token });
  } catch (err) {
    next(err);
  }
};

// eslint-disable-next-line consistent-return
module.exports.register = async (req, res, next) => {
  const createUser = req.body;
  try {
    const { email, password } = createUser;
    // Check User Provide Data valid Or not
    const isValid = await userValidationSchema.isValid(createUser, {
      abortEarly: false,
    });

    if (!isValid) {
      return res.status(200).json({ message: 'Validation Error' });
    }

    // Check user already exist or not
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(200).json({ message: 'User Already Exist' });
    }

    // Making hashed password for security
    const salt = genSaltSync(parseInt(process.env.SALT));
    const hashedPassword = await hash(password, salt);

    // saving User Data
    const insertedUser = await Users.create({
      ...createUser,
      password: hashedPassword,
    });

    // making payload for user Jwt
    const { _id: id, fullName: name, email: userEmail, ban, role } = insertedUser;

    const payload = {
      id,
      name,
      userEmail,
      ban,
      role,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1day',
    });
    // Send Final Data
    res.status(200).json({ ...payload, token });
  } catch (err) {
    next(err);
  }
};
