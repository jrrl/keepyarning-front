/**
 * Created by Rafael on 3/8/2017.
 */
import express from 'express';

const app = express();

app.use('/', express.static('dist'));
app.listen(process.env.PORT || 3000);
