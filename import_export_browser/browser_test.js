// Modules Export/Import

export const greet = (name = "User") => {
  console.log(`Hey, ${name}!`);
};

export const wish = (name = "User") => {
  console.log(`Happy birthday, ${name}!`);
};

export default () => console.log("hey from ES6 imports/exports");