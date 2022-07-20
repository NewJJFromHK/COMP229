import express from 'express';

//import the Movie Model
import Movie from '../Models/movie';

import { UserDisplayName } from '../Util';

export function DisplayMovieList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Movie.find(function(err, moviesCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Movie List', page: 'movie-list', movies: moviesCollection, displayName: UserDisplayName(req)});
    });

}

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction)
{

}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}

export function ProcesseditPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}