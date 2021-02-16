const express = require('express');

const app = express();
const port = 8080;

app.get('/hello', (req: any, res: any) => {
    res.send('world!');
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}/hello`);
})