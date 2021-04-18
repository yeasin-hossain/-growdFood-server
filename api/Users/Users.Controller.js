const Users = require('../../model/User.model');

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await Users.find({});
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

// change role or ban or unbanned user
module.exports.updateRoleOrBan = async (req, res, next) => {
  const { type, action } = req.body;
  const { userID } = req.params;
  try {
    if (type === 'role') {
      const changeRole = await Users.findByIdAndUpdate(userID, { role: action });
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
    } else if (type === 'ban') {
      const banUser = await Users.findByIdAndUpdate(userID, { ban: action });
      const { _id: id, fullName: name, email: userEmail, ban, role } = banUser;

      const payload = {
        id,
        name,
        userEmail,
        ban,
        role,
      };
      res.status(200).json(payload);
    }
  } catch (err) {
    next(err);
  }
};
