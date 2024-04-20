//import express, express router as shown in lecture code

import { Router } from 'express';
const router = Router();
import { registerUser, loginUser } from '../data/users.js';
import { validateNewUserInput, validateUserInput } from '../helpers.js';

router.route('/').get(async (req, res) => {
  //code here for GET THIS ROUTE SHOULD NEVER FIRE BECAUSE OF MIDDLEWARE #1 IN SPECS.
  return res.json({ error: 'YOU SHOULD NOT BE HERE!' });
});

router
  .route('/register')
  .get(async (req, res) => {
    //code here for GET
    return res.render('register');
  })
  .post(async (req, res) => {
    //code here for POST
    let reqData = req.body;

    //make sure there is something present in the req.body
    if (!reqData || Object.keys(reqData).length === 0) {
      return res.render('register').status(400).json({ error: 'There are no fields in the request body' });
    }
    //validate data
    let newUserData;
    try {
      newUserData = validateNewUserInput(reqData.firstName, reqData.lastName, reqData.username, reqData.password, reqData.confirmPassword, reqData.favoriteQuote, reqData.themePreference, reqData.role);
    } catch (e) {
      return res.status(400).render('register', { error: e });
    }

    try {

      const newUser = await registerUser(newUserData.firstName, newUserData.lastName, newUserData.username, newUserData.password, newUserData.favoriteQuote, newUserData.themePreference, newUserData.role);
      if (newUser.signupCompleted) {
        return res.redirect('/login');
      } else {
        return res.status(500).render('register', { error: 'Internal Server Error' });
      }
    } catch (e) {
      return res.status(400).render('register', { error: e });
    }
  });

router
  .route('/login')
  .get(async (req, res) => {
    //code here for GET
    return res.render('login');
  })
  .post(async (req, res) => {
    //code here for POST   
    let reqData = req.body;

    //make sure there is something present in the req.body
    if (!reqData || Object.keys(reqData).length === 0) {
      return res.render('login').status(400).json({ error: 'There are no fields in the request body' });
    }
    //validate data
    let userData;
    try {
      userData = validateUserInput(reqData.username, reqData.password);
    } catch (e) {
      res.status(400).render('login', { error: e });
    }

    try {

      const user = await loginUser(userData.username, userData.password);
      if (user) {
        req.session.user = {
          firstName: `${user.firstName}`,
          lastName: `${user.lastName}`,
          username: `${user.username}`,
          favoriteQuote: `${user.favoriteQuote}`,
          themePreference: `${user.themePreference}`,
          role: `${user.role}`
        };
        if (user.role === 'admin') {
          return res.redirect('/admin');
        } else {
          return res.redirect('/user');
        }
      } //else {
      //   return res.status(500).json({ error: 'Internal Server Error' });
      // }
    } catch (e) {
      return res.status(400).render('login', { error: e });
    }
  });

router.route('/user').get(async (req, res) => {
  //code here for GET
  return res.render('user', params(req, true));
});

router.route('/admin').get(async (req, res) => {
  //code here for GET
  return res.render('admin', params(req, false));
});

router.route('/logout').get(async (req, res) => {
  //code here for GET
  req.session.destroy();
  return res.render('logout');
});

let params = (req, isUserView) => {
  let obj = {
    firstName: req.session.user.firstName,
    lastName: req.session.user.lastName,
    favoriteQuote: req.session.user.favoriteQuote,
    currentTime: new Date().toUTCString(),
    themePreference: req.session.user.themePreference
  }
  if (isUserView) {
    obj.role = req.session.user.role;
    obj.isAdmin = (req.session.user.role === 'admin') ? true : false;
  }
  return obj;
}

export default router;