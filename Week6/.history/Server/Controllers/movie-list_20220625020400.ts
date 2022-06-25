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
    res.render('index', {title: 'Add', page: 'edit', movie: '', displayName: UserDisplayName(req) });
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    let id = req.params.id;

    //pass the id to the db and read the movie into the edit page
    Movie.findById(id, {}, {}, function(err,movieToEdit)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        //show the edit view with the data
        res.render('index', {title: 'Edit', page: 'edit', movie: movieToEdit, displayName: UserDisplayName(req) });

    });
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction):void
{
    //instantiate a new Movie to add
    let newMovie = new Movie({
        "Name": req.body.movieName,
        "Director": req.body.movieDirector,
        "Year": req.body.movieYear,
        "Rating": req.body.movieRating
    });

    //Insert the new Movie object into the database (movie collection)
    Movie.create(newMovie, function(err: ErrorCallback)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        //new movie has been added -> refresh the movie-list
        res.redirect('/movie-list');
    })
}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction):void
{
    let id = req.params.id;

    //instantiate a new Movie to Edit
    let updatedMovie = new Movie
    ({
        "_id": id,
        "Name": req.body.movieName,
        "Director": req.body.movieDirector,
        "Year": req.body.movieYear,
        "Rating": req.body.movieRating
    });

    //update the movie in the database
    Movie.updateOne({_id: id}, updatedMovie, function(err: ErrorCallback)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        //edit was successful -> go to the movie-list page
        res.redirect('/movie-list');
    });
}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction):void
{
    let id = req.params.id;

    //pass the id to the database and delete the movie
    Movie.remove({_})
}