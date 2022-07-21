import { CallbackError } from 'mongoose';
import express from 'express';

import Movie from '../Models/movie';

import {UserDisplayName} from '../Util';

export function DisplayMovieList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Movie.find(function(err, moviesCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        //res.render('index', {title: 'Movie List', page: 'movie-list', movies: moviesCollection, displayName: UserDisplayName(req)});

        res.json({success: true, msg: 'Movie-List Displayed Successfully', movies: moviesCollection, user:req.user});

    })
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
    Movie.create(newMovie, function(err: CallbackError)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        //new movie has been added -> refresh the movie-list
        res.json({success: true, msg: 'Successfully Added Movie', movie: newMovie})
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
    Movie.updateOne({_id: id}, updatedMovie, function(err: CallbackError)
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

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    let id = req.params.id;

    //pass the id to the database and delete the movie
    Movie.remove({_id: id}, function(err: CallbackError)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        //delete was successful
        res.redirect('/movie-list');
    });
}