import express from 'express';
import { PORT } from './config/constants';
import { parseDataRouter1 } from './routes';
import { parseDataRouter2 } from './routes';

const app = express();
app.use(express.json());

app.use('/api/v1/parse', parseDataRouter1);
app.use('/api/v2/parse', parseDataRouter2);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
