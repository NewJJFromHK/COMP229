Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@NewJJFromHK 
CentennialCollege
/
COMP229-M2022-Labs-Section1
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
COMP229-M2022-Labs-Section1/Lesson4/Server/Config/app.ts /
@tsiliopoulos
tsiliopoulos installed bootstrap and fontawesome
Latest commit 74db353 4 days ago
 History
 1 contributor
42 lines (33 sloc)  1.12 KB
   
import createError from 'http-errors';
import express, { NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from '../Routes/index'; 

const app = express();

// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) 
{
  next(createError(404));
});

// error handler
app.use(function(err: createError.HttpError, req: express.Request, res: express.Response, next: NextFunction) 
{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;