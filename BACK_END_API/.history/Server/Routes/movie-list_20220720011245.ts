import express from 'express';
const router = express.Router();

import {AuthGuard} from '../Util'

import {DisplayMovieList} from '../Controllers/movie-list';

//Display Movie List Page
router.get('/movie-list', DisplayMovieList);

export default router;