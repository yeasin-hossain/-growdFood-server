module.exports.getAllUsers = async (req, res) => {
  res.send(req.currentUser);
};
