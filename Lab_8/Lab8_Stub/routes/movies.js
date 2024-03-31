//import express and express router as shown in lecture code and worked in previous labs.  Import your data functions from /data/movies.js that you will call in your routes below
import { Router } from 'express';
const router = Router();
import { searchMoviesByName, searchMovieById } from '../data/movies.js';
import { checkUndefinedOrNull, checkisValidString, validateId } from '../helpers.js'

router.route('/').get(async (req, res) => {
  //code here for GET will render the home handlebars file
  res.render('home');
});

router.route('/searchmovies').post(async (req, res) => {
  //code here for POST this is where your form will be submitting searchMoviesByName and then call your data function passing in the searchMoviesByName and then rendering the search results of up to 20 Movies.
  let reqData = req.body;
  let title;
  //make sure there is something present in the req.body
  if (!reqData || Object.keys(reqData).length === 0) {
    return res
      .status(400)
      .json({ error: 'There are no fields in the request body' });
  }
  //search movie by title
  try {
    title = reqData.searchMoviesByName;
    if (!title || title.trim() === '') {
      res.status(400)
      res.render('home', { hasError400: true });
      return;
    }
    checkUndefinedOrNull(title, 'title');
    title = checkisValidString(title, 'title');
  } catch (e) {
    return res.status(400).json({ error: e });
  }

  try {

    const moviesList = await searchMoviesByName(title);
    if (moviesList.length > 0) {
      res.render('movieSearchResults', { title: title, movies: moviesList });
    } else {
      res.status(404)
      res.render('home', { hasError404: true, title: title });
    }
  } catch (e) {
    return res.status(500).json({ error: e });
  }
});

router.route('/movie/:id').get(async (req, res) => {
  //code here for GET a single movie
  try {
    if (!req.params.id || req.params.id.trim() === '') {
      res.status(400)
      res.render('home', { hasError400Id: true });
      return;
    }
    req.params.id = validateId(req.params.id, 'Id URL Param');
  } catch (e) {
    return res.status(400).json({ error: e });
  }

  //try getting the movie by ID
  try {
    const movieData = await searchMovieById(req.params.id);
    if (movieData.Response === 'True') {
      res.render('movieById', { movie: movieData });
    } else {
      res.status(404)
      res.render('home', { hasError404Id: true, id: req.params.id });
    }

  } catch (e) {
    return res.status(404).json({ error: e });
  }
});

//export router
export default router;