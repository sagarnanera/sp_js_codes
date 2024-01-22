const { getDBInstance } = require("../DB/db");
const { customError } = require("../handlers/error.handler");
const convertToObjectId = require("../utils/objectIdConverter");

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
    this.createdOn = new Date();
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
      throw new customError("User with this email already exist...", 400);
    }

    const result = await this.#collection.insertOne(user);

    return result.insertedId;
  }

  async getUserById(userId) {
    const user = await this.#collection.findOne(
      { _id: convertToObjectId(userId) },
      { projection: { password: 0 } }
    ); // have to use projection as parameter in findOne, but in find it can be used as method.
    return user;
  }

  async getUser(searchQuery) {
    const user = await this.#collection.findOne(searchQuery);
    return user;
  }

  async updateUser(userId, updateData, currentEmail) {
    console.log("updateData:", updateData);

    if (currentEmail && updateData.email && currentEmail !== updateData.email) {
      console.log("here in if");

      const isExist = await this.#collection.findOne({
        email: updateData.email
      });

      if (isExist) {
        throw new customError("User with this email already exist...", 400);
      }
    }

    const selectiveUpdate = {};

    if (updateData.name !== undefined) {
      selectiveUpdate.name = updateData.name;
    }

    if (updateData.email !== undefined) {
      selectiveUpdate.email = updateData.email;
    }

    if (updateData.password !== undefined) {
      selectiveUpdate.password = updateData.password;
    }

    if (updateData.organization !== undefined) {
      selectiveUpdate.organization = updateData.organization;
    }

    const updatedUser = await this.#collection.findOneAndUpdate(
      { _id: convertToObjectId(userId) },
      { $set: selectiveUpdate },
      { returnDocument: "after", projection: { password: 0 } }
    );

    console.log("updated user : ", updatedUser);

    return updatedUser;
  }

  async deleteUser(userId) {
    const res = await this.#collection.deleteOne({
      _id: convertToObjectId(userId)
    });
    return res;
  }

  async resetPassword(userId, updatedPass) {
    const user = await this.#collection.findOne({
      _id: convertToObjectId(userId)
    });

    user.password = updatedPass;

    await this.#collection.updateUser(user._id, user);
  }
}

module.exports = User;
