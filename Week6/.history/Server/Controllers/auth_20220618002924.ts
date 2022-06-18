import express from 'express';

//need passport functionally
import passport from 'passport';

//need to include the Use model for authentication functions
import User from '../Models/user';

//Display Functions
export function DisplayLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: ''});
}

export function DisplayRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', {title: 'Register', page: 'Register', messages: req.flash('registerMessage'), displayName: ''});
}

//Processing Functions
export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    passport.authenticate('local', function(err, user, info)
    {
        // are there server errors?
        if(err)
        {
            console.error(err)
            res.end(err);
        }

        //are there login errors?
        if(!user)
        {
            req.flash('loginMessage', 'Authentication error!');
            return res.redirect('/login');
        }

        //no problems - we have a good username and password
        req.logIn(user, function(err))
        {
            //are there db error?
            if(err)
            {
                console
            }
        }
    })
}

export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}

export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}