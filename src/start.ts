// const app = require('./server.js')
// app.listen(3000)

import { PORT } from './config/constants';
const app = require('./server.js')

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});