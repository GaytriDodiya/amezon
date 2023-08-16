import express from 'express'
import data from './data.js'
import Path from 'path'

const port = process.env.PORT || 5000;

const app = express();
app.get('/api/products', (req, res) => {

    res.send(data.products)

})

const __dirname = Path.resolve();
app.use(express.static(Path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
    res.sendFile(Path.join(__dirname, '/frontend/build/index.html'))
);



app.listen(port, () => { console.log(`Server is runnign on port  ${port}`) })