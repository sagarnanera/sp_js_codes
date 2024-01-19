const { ObjectId } = require("mongodb");
const { getDBInstance } = require("../DB/db");
const { customError } = require("../handlers/error.handler");
// const { hashPassword } = require("../services/passwordService");

class User {
  name;
  email;
  password;
  createdOn;
  organization;
  #collection;

  constructor(
    { name, email, password, organization } = {
      user: "",
      email: "",
      password: "",
      organization: ""
    }
  ) {
    if (arguments.length === 0) {
      this.#collection = getDBInstance().collection("users");
      return;
    }

    this.name = name;
    this.email = email;
    this.password = password;
    this.createdOn = new Date().toUTCString();
    this.organization = organization;
    this.#collection = getDBInstance().collection("users");
  }

  async save() {
    const user = {
      name: this.name,
      email: this.email,
      createdOn: this.createdOn,
      organization: this.organization,
      password: this.password
    };

    const isExist = await this.#collection.findOne({
      email: this.email
    });

    if (isExist) {
      // console.log("user is not unique", isExist);
      throw new customError("User with this email already exist...", 400);
    }

    console.log(this);

    // user.password = await hashPassword(this.password);

    const result = await this.#collection.insertOne(user);
    return result.insertedId;
  }

  async getUserById(userId) {
    const user = await this.#collection.findOne(
      { _id: new ObjectId(userId) },
      { projection: { password: 0 } }
    );
    return user;
  }

  async getUser(searchQuery) {
    const user = await this.#collection.findOne(searchQuery);
    return user;
  }

  async updateUser(userId, updateData) {
    // if (updateData.password) {
    //   updateData.password = await hashPassword(updateData.password);
    // }

    const updatedUser = await this.#collection.findOneAndUpdate(
      { _id: new ObjectId(userId) },
      { $set: updateData },
      { returnOriginal: false, projection: { password: 0 } }
    );

    return updatedUser;
  }

  async deleteUser(userId) {
    const res = await this.#collection.deleteOne({ _id: new ObjectId(userId) });
    console.log(res);
  }

  async resetPassword(userId, updatedPass) {
    const user = await this.#collection.findOne({ _id: new ObjectId(userId) });

    user.password = updatedPass;

    await this.#collection.updateUser(user._id, user);
  }
}

module.exports = User;
