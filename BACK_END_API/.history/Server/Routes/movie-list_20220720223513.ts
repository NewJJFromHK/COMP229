import express from 'express';
const router = express.Router();

import {AuthGuard} from '../Util'

import {DisplayMovieList, ProcessAddPage, ProcessEditPage, ProcessDeletePage} from '../Controllers/movie-list';

//Display Movie List Page
router.get('/movie-list', DisplayMovieList);

router.get('/add', DisplayAddPage);


router.post('/add', ProcessAddPage);

router.post('/edit/:id', ProcessEditPage);

router.post('/delete/:id', ProcessDeletePage);

export default router;