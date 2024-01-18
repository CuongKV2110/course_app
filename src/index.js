const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
var path = require('path');
const route = require('./routes');
const port = 3000;
const app = express();
const db = require('./config/db');
const methodOverride = require('method-override');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger/swagger.json');
const swaggerJsdoc = require("swagger-jsdoc");


app.use(express.static(path.join(__dirname, 'public')));

//Use swagger api
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Connect to DB
db.connect();

// app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(methodOverride('_method'));
app.use(express.json());

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    }
}));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

// const options = {
//     definition: {
//         openapi: "3.1.0",
//         info: {
//             title: "LogRocket Express API with Swagger",
//             version: "0.1.0",
//             description:
//                 "This is a simple CRUD API application made with Express and documented with Swagger",
//             license: {
//                 name: "MIT",
//                 url: "https://spdx.org/licenses/MIT.html",
//             },
//             contact: {
//                 name: "LogRocket",
//                 url: "https://logrocket.com",
//                 email: "info@email.com",
//             },
//         },
//         servers: [
//             {
//                 url: "http://localhost:3000",
//             },
//         ],
//     },
//     apis: ["./routes/*.js"],
// };

// const specs = swaggerJsdoc(options);
// app.use(
//     "/api-docs",
//     swaggerUi.serve,
//     swaggerUi.setup(specs)
// );

app.listen(port, () => {
    console.log(`App Listening on port http://localhost:${port}`);
});


