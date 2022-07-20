import express from 'express';
const router = express.Router();

import {AuthGuard} from '../Util'

import {DisplayAddPage, DisplayEditPage, DisplayMovieList, ProcessAddPage} from '../Controllers/movie-list';

//Display Movie List Page
router.get('/movie-list', AuthGuard ,  DisplayMovieList);

//Display Add Page
router.get('/add', AuthGuard ,  DisplayAddPage); 

//Display edit Page
router.get('/edit/:id', AuthGuard ,  DisplayEditPage);

//Process Add Page
router.post('/add', AuthGuard ,  ProcessAddPage); 

//Process Edit Page
router.post('/edit/:id', AuthGuard ,  Process); 

//Process Delete Page
router.get('/delete/:id', AuthGuard ,  DisplayMovieList); 

export default router;