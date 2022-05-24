import 'dotenv/config'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());

server.get('/dobro/:numero', (req,resp) => {
    let n = Number(req.params.numero);
    let x = n * 2;

    resp.send({
        dobro: x
    })

})

server.get('/somar', (req, resp) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);

    resp.send({
        soma : a + b
    })
})

server.post('/somar', (req, resp) => {
    let a = req.body.a;
    let b = req.body.b;

    let x = a + b;

    resp.send({
        soma: x
    })

})

server.post('/media', (req, resp) => {
    let {n1, n2, n3} = (req.body);

    let x= (n1 + n2 + n3) /3;

    resp.send({
        media : x
    })
    
})

server.get ('/tabuada', (req,resp) => {
    let a = Number(req.query.a);
    let falsa = 0;
    let array = [];
    for(let i =0 ; i<=10; i++){
        array[i] = a*i;
        falsa++;
    }
})



server.listen(process.env.PORT,
            () => console.log(`API online na porta ${process.env.PORT}`));