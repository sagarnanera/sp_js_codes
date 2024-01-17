// const fsPromise = require("fs").promises;
// const DATA_FILE_PATH = "D:\\SocialPilot-work\\basic_js\\data.json";

// const writeTodoFile = async (data) => {
//   try {
//     await fsPromise.writeFile(DATA_FILE_PATH, data);

//     // const writeData = JSON.stringify(data);
//     // await fsPromise.writeFile(DATA_FILE_PATH, writeData);

//   } catch (error) {
//     console.log("error writing file: ", error.message);
//     throw error;
//   }
// };

// const fileMetaData = async () => {
//   const metaData = await fsPromise.stat(DATA_FILE_PATH);
//   console.log("file metadata:", metaData);
// };

// const data = [
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b",
//     name: "test todo",
//     description: "this is test todo description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   },
//   {
//     id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
//     name: "test todo - 2",
//     description: "this is test todo 2 description.",
//     createdAt: Date.now()
//   }
// ];

// writeTodoFile(JSON.stringify(data));
// // writeTodoFile(data);

// fileMetaData()

// module.exports = writeTodoFile;

// import fetch from "node-fetch";
// fetch("https://review-development-rest.socialpilot.co/contact/create/", {
//   headers: {
//     accept: "application/json, text/plain, */*",
//     "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
//     authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyYmY4ZmQ4NC05MWVjLTUwNDgtOWViOC1jZjJlZTlkNjZiNjQiLCJyb2xlIjoiTyIsImNsaWVudElkIjoiZWR1d2s5OXliMW91ODV3cTJsNTMzcHV2aHczcTU1M2tqeWczOHEyaiIsIm93bmVySWQiOiIyYmY4ZmQ4NC05MWVjLTUwNDgtOWViOC1jZjJlZTlkNjZiNjQiLCJpZCI6ImM2MWUxZDI3NzE3ZWQzN2UiLCJpYXQiOjE3MDU0MDA0NTgsImV4cCI6MTcxMDU4NDQ1OH0.ksdENMwqLwrVEtpIUjajC4dtXA-nfShkW0YKchf0apw",
//     "content-type": "application/json",
//     "sec-ch-ua":
//       '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": '"Windows"',
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-site",
//     "x-api-key": "NVte8b23ke6Q1oPThpFmz9fswOdQPY0C8ZzwLV3c",
//     xclientid: "eduwk99yb1ou85wq2l533puvhw3q553kjyg38q2j",
//     xclientsecret: "eduwk99yb1ou85wq2l533puvhw3q553kjyg38q2j",
//     Referer: "https://review-dev.socialpilot.co/",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   body: '{"brandId":"8ea6ca2e-037b-4748-a4e7-d27b28d7ad88","email":"idk2@gmail.com","phoneNo":"+12562690954","firstName":"test","lastName":"pata nai","tags":["test","test2","test3"],"locationIds":["38ff1f9b-772e-4ec5-9fa7-a907c76f42dc"]}',
//   method: "POST"
// })
//   .then((res) => res.json())
//   .then((resJson) => console.log(resJson))
//   .catch((err) => console.log(err));

/// ----------------- OS module in node -----------------
// const os = require("os");
// console.log(os.arch());
// console.log(os.constants.sysconf("SC_OPEN_MAX"));
// console.log(`Number of CPU cores: ${os.cpus().length}`);
// console.log(os.cpus());
// console.log(os.devNull);
// console.log(os.endianness());
// console.log(os.freemem()/1024/1024/1024);
// console.log(os.platform());
// console.log(os.release());
// console.log(os.getPriority());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.loadavg());
// console.log(os.machine());
// console.log(os.type());
// console.log(os.uptime());
// console.log(os.version());
// console.log(os.networkInterfaces());
// console.log(os.tmpdir());
// console.log(os.totalmem()/1024/1024/1024);
// console.log(os.userInfo());

/// ----------------- FS module in node -----------------
// const fs = require("fs");

// FILE_PATH = "D:\\SocialPilot-work\\basic_js\\data.txt";
// console.log(fs.existsSync(FILE_PATH));

// const deleteFile = async (filePath) => {
// try {
//   await fs.promises.unlink(filePath)
//   console.log("file deleted successfully!!");
// } catch (error) {
//   console.error("error deleting file :",error);
// }

// }
// console.log( deleteFile(FILE_PATH));

// const openFile = async (filePath) => {
//   try {
//     const fileHandle = await fs.promises.open(filePath);

//     return fileHandle;
//   } catch (error) {
//     console.log(error);
//   }
// };

// for (let i = 0; i < 100000; i++) {
// openFile(FILE_PATH)
//   .then((val) => {
//     // console.log(val);
//     // console.log(val.fd);
//     // val.readFile({encoding:"utf-8",flag:"r"}).then(data => console.log(data));
//     console.log(val.stat().then(data => console.log(data)));
//     return val;
//   })
//   // .then((val) => val?.close())
//   .catch((err) => console.log(err));
// }

// fs.mkdirSync("newDir");
// fs.linkSync(FILE_PATH,"./newfile.txt");
// fs.rmdirSync("./newDir",{recursive:true});
// fs.rmSync("./newDir",{recursive:true});

// const stats = fs.statSync("./newfile.txt")
// console.log(stats);
// console.log(stats.isSymbolicLink());
// console.log(stats.size);
// console.log(stats.isDirectory());
// console.log(stats.isFile());

// const currdir =fs.readdirSync('.',{recursive:true,withFileTypes:true})
// console.log(currdir);

// fs.symlinkSync(FILE_PATH,"./newlink1.txt",'file');

// fs.unlinkSync('./newfile.txt')

/// ----------------- Cluster module in node -----------------

const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isPrimary) {
  console.log(`Master ${process.pid} is running.`);

  const reqs = {};

  const incrReq = (msg, pid,id) => {
    // console.log("get req....",pid);
    if (msg.cmd && msg.cmd === "gotReq") {
      if (!reqs[pid]) {
        reqs[pid] = 0;
      }
      reqs[pid]++;
    }

    if(reqs[pid] > 10000) cluster.workers[id].send("shutdown")
  };

  for (let i = 0; i < numCPUs - 4; i++) {
    console.log(`Forking worker ${i}`);
    cluster.fork();
  }

  for (const id in cluster.workers) {
    // cluster.worker[id].on("message", (msg) => incrReq(msg, cluster.worker.pid));
    cluster.workers[id].on("message",(msg)=>incrReq(msg,cluster.workers[id].process.pid,id));
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);

    console.log(reqs);
  });

  // cluster.on("")
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("Hello World\n");
      process.send({ cmd: "gotReq" });
    })
    .listen(8000, (err) => {
      if (err) {
        console.log(err, 806);
        return;
      }

      console.log("Server started on port processId: ", process.pid);
    });
  // .listen(process.pid,(err)=>{
  //   if (err) {
  //     console.log(err,806);
  //     return
  //   }

  //   console.log("Server started on port : ",process.pid);
  // });

  process.on('message',(msg)=>{
    console.log("got message : ",msg);
  })

  console.log(`Worker ${process.pid} got started....`);
}


