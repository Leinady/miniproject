const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 8000

let tasks = [
    { id: 1, name: 'Cat_1', weight : '1' ,picture:'https://i.pinimg.com/564x/87/a8/a3/87a8a378128df67cc09df6eda20be10f.jpg'},
    { id: 2, name: 'Cat_2', weight : '5' ,picture:'https://i.pinimg.com/564x/a7/f0/1c/a7f01cab31b87524f5bbc7da7ee0856f.jpg'},
    { id: 3, name: 'Cat_3', weight : '3' ,picture:'https://i.pinimg.com/564x/71/95/60/7195601aabb8f2fbf2a28ee28d3b3cc0.jpg'}
]
app.use(cors())

app.get('/', (req, res) => {
    res.json(tasks)
})

app.listen(PORT, () => console.log(`listen at ${PORT}`))