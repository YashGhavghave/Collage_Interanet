import express from 'express'
import NewUser from './Routes/CreateUser.route'

const app =  express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.post('/api/', NewUser);

app.listen(port, ()=>{
    console.log(`Server Running on http://localhost:${port}`)
})