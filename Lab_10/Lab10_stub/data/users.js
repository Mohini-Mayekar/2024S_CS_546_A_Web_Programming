//import mongo collections, bcrypt and implement the following data functions

import { users } from '../config/mongoCollections.js';
import { validateNewUserInput, validateUserInput } from '../helpers.js';

import bcrypt from 'bcrypt';
const saltRounds = 16;

export const registerUser = async (
  firstName,
  lastName,
  username,
  password,
  favoriteQuote,
  themePreference,
  role
) => {
  //validation
  let newUser = validateNewUserInput(firstName, lastName, username, password, null, favoriteQuote, themePreference, role, false);
  let pass = newUser.password;
  //Hashing the password
  const hash = await bcrypt.hash(pass, saltRounds);
  newUser.password = hash;

  //DB call to store new user
  const userCollection = await users();
  //check for duplicate user
  const userInfo = await userCollection.findOne({
    username: newUser.username
  });

  if (userInfo) throw `User with username '${newUser.username}' already exist.`;

  const insertInfo = await userCollection.insertOne(newUser);
  if (!insertInfo.acknowledged || !insertInfo.insertedId)
    throw 'Could not add user';

  return { signupCompleted: true };
};

export const loginUser = async (username, password) => {
  //validation
  let user = validateUserInput(username, password);

  let userName = user.username;
  const userCollection = await users();
  const userData = await userCollection.findOne({ username: userName });
  if (userData === null) throw `Either the username or password is invalid.`;
  //comparing with the stored hash
  let compareToMatch = await bcrypt.compare(user.password, userData.password);

  if (!compareToMatch) throw `Either the username or password is invalid.`;
  delete userData.password;

  return userData;
};
