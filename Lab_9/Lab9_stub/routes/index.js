//Here you will require route files and export them as used in previous labs.
import textRoutes from './textdecoder.js';
import path from 'path';
const constructorMethod = (app) => {
    app.use('/', textRoutes);
    app.use('*', (req, res) => {
        res.sendFile(path.resolve('static/homepage.html'));
    });
};

export default constructorMethod;