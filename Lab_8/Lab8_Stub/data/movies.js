//import axios, md5
import axios from "axios";
import { url_moviesByName, url_moviesById, checkUndefinedOrNull, checkisValidString } from '../helpers.js'

export const searchMoviesByName = async (title) => {
  /*Function to make an axios call to search the api and return up to 20 movies matching the title param
  API endpoint: http://www.omdbapi.com/?apikey=CS546&s={title}
  */
  checkUndefinedOrNull(title, 'title');
  title = checkisValidString(title, 'title');
  let url = url_moviesByName.replace('title', title);
  let res1 = await getMoviesByName(url);
  let res = [];
  let res1List = [];
  if (res1 != null && res1.Search != null) {
    res1List = res1.Search;
    for (let i = 0; i < res1List.length; i++) {
      res.push(res1List[i]);
    }
    url.concat('&page=2');
    if (parseInt(res1.totalResults) > 10) {
      let res2 = await getMoviesByName(url);
      if (res2 != null && res2.Search != null) {
        let res2List = [];
        res2List = res2.Search;
        for (let i = 0; i < res2List.length; i++) {
          res.push(res2List[i]);
        }
      }
    }
  }
  return res;
};

export const searchMovieById = async (id) => {
  /*Function to make an axios call to the the api matching the id
 API endpoint: http://www.omdbapi.com/?apikey=CS546&i={id}
  */
  checkUndefinedOrNull(id, 'id');
  id = checkisValidString(id, 'id');
  let url = url_moviesById.replace('id', id);
  let res = await getMoviesById(url);
  return res;
};

async function getMoviesByName(url_movieByName) {
  const { data } = await axios.get(url_movieByName);
  return data;
}

async function getMoviesById(url_movieById) {
  const { data } = await axios.get(url_movieById);
  return data;
}