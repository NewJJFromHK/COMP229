import express from 'express';

import Movie from '../Models/movie';

import {UserDisplayName} from '../Util';

export function DisplayMovieList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Movie.find
}