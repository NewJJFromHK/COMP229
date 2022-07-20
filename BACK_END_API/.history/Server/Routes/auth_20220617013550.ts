import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayRegisterPage, ProcessLogoutPage, DisplayLoginPage, ProcessLoginPage, ProcessRegisterPage} from "../Controllers/auth"

/* Display Login page. */
router.get('/login', DisplayLoginPage);

/* Display Register page. */
router.get('/register', DisplayRegisterPage);



/* P projects page. */
router.post('/login', ProcessLoginPage);

/* Display services page. */
router.get('/services', ProcessRegisterPage);

/* Display contact page. */
router.get('/contact', ProcessLogoutPage);

export default router;

