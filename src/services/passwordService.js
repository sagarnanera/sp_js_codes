const bcrypt = require("bcryptjs");

exports.hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return hash;
};

exports.compareHash = async (password, hash) => {
  // console.log(password, hash);
  const isMatch = await bcrypt.compare(password, hash);

  return isMatch;
};

// bcrypt.hash("123456", bcrypt.genSaltSync(10), (err, hash) => {
//   console.log(hash);
// });

// bcrypt.compare(
//   "123456",
//   "$2a$10$kTwZZBMLtQo.cDC44C378ew0v5wljidiGhCNVKXj52V0vnS7WPOzq",
//   (err, isMatch) => {
//     console.log(isMatch);
//   }
// );
