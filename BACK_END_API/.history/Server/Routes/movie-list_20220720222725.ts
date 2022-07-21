import express from 'express';
const router = express.Router();

import {AuthGuard} from '../Util'

import {DisplayMovieList, ProcessAddPage, ProcessE} from '../Controllers/movie-list';

//Display Movie List Page
router.get('/movie-list', DisplayMovieList);

router.post('/add', ProcessAddPage);

router.post('/edit/:id', ProcessEditPage);

router.post('/delete/:id', ProcessDeletePage);

export default router;