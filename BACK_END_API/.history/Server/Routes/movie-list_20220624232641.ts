import express from 'express';
const router = express.Router();

import {AuthGuard} from '../Util'

import {DisplayMovieList} from '../Controllers/movie-list';

//Display Movie List Page
router.get('/movie', AuthGuard ,  DisplayMovieList);

//Display Add Page
router.get('/movie-list', AuthGuard ,  DisplayMovieList); 

//Display edit Page
router.get('/movie-list', AuthGuard ,  DisplayMovieList);

//Process Add Page

//Process Edit Page

//Process Delete Page

export default router;