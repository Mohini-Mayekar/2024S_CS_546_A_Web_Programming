/*
Require express and express router as shown in lecture code and worked in previous labs.
Your server this week should not be doing any of the processing! Your server only exists to allow someone to get to the HTML Page and download the associated assets to run the text analyzer page.

you just need one route to send the static homepage.html file
*/


import { Router } from 'express';
import path from 'path';
const router = Router();


router.get('/', (req, res) => {
    res.sendFile(path.resolve('static/homepage.html'));
});

router.post('/', (req, res) => {
    console.log('In server route for processing');

    try {
        res.json();
    } catch (e) {
        return res.json(e);
    }
});

export default router;