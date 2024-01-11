const fsPromise = require("fs").promises;
const DATA_FILE_PATH = process.env.DATA_FILE_PATH;

const writeTodoFile = async (data) => {
  try {
    // await fsPromise.writeFile("D:\\SocialPilot-work\\basic_js\\data\\data.txt", data);
    const writeData = JSON.stringify(data);

    await fsPromise.writeFile(DATA_FILE_PATH, writeData);
  } catch (error) {
    console.log("error writing file: ", error.message);
    throw error;
  }
};

// const data = [
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b",
//     name: "test todo",
//     description: "this is test todo description.",
//     createdAt : 
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt : 
//   }
// ];

// writeTodoFile(JSON.stringify(data));

module.exports = writeTodoFile;
