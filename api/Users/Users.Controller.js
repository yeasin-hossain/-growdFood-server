const Users = require('../../model/User.model');

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await Users.find({});
    console.log(req.currentUser);
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(200).json({ message: 'User Not Available' });
    }
  } catch (err) {
    next(err);
  }
};

// get single user
module.exports.singleUser = async (req, res, next) => {
  const { userID } = req.params;
  try {
    const user = await Users.findById(userID);
    const { _id: id, fullName: name, email: userEmail, ban, role } = user;

    const payload = {
      id,
      name,
      userEmail,
      ban,
      role,
    };
    res.status(200).json(payload);
  } catch (err) {
    next(err);
  }
};

// Make Admin
module.exports.updateRoleOrBan = async (req, res, next) => {
  const { type, action } = req.body;
  const { userID } = req.params;
  try {
    if (type === 'role') {
      const changeRole = await Users.findByIdAndUpdate(userID, { role: action });
      console.log(changeRole);
      if (changeRole) {
        const updatedUser = await Users.findById(userID);
        const { _id: id, fullName: name, email: userEmail, ban, role } = updatedUser;

        const payload = {
          id,
          name,
          userEmail,
          ban,
          role,
        };
        res.status(200).json(payload);
      }
    }
  } catch (err) {
    next(err);
  }
};
