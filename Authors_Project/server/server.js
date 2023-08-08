const express = require('express');
const cors = require('cors');
const app = express();

require('./Config/Authors_config');

app.use(cors(), express.json(), express.urlencoded({extended:true}));

require('./Routes/AuthorsRoutes')(app);

app.listen(8000, ( ) => console.log('listening at port 8000'))