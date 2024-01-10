// Modules Export/Import

const greet = (name = "User") => {
  console.log(`Hey, ${name}!`);
};

const wish = (name = "User") => {
  console.log(`Happy birthday, ${name}!`);
};

module.exports = {
  greet,
  wish
};
