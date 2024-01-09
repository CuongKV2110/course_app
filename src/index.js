const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
var path = require('path');
const route = require('./routes');
const port = 3000;
const app = express();
const db = require('./config/db');
const swaggerJsDoc = require('./config/swagger/swagger');

app.use(express.static(path.join(__dirname, 'public')));

const swaggerUi = require('swagger-ui-express');
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc));

//Connect to DB
db.connect();

// app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
}));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
    console.log(`App Listening on port http://localhost:${port}`);
});