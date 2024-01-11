const fsPromise = require("fs").promises;
const DATA_FILE_PATH = process.env.DATA_FILE_PATH;

const readTodoFile = async () => {
  try {
    // const data = await fsPromise.readFile('D:\\SocialPilot-work\\basic_js\\data\\data.txt');
    const data = await fsPromise.readFile(DATA_FILE_PATH);
    // console.log(JSON.parse(data));
    return JSON.parse(data);
  } catch (error) {
    console.log("error reading file: ", error.message);
    throw error
  }
};

// readTodoFile();

module.exports = readTodoFile;
