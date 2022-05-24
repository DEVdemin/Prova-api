import { Router } from 'express'
import { dobro, soma, tabuada, media, temperatura, corPrinmaria, maiorNumero } from './service.js'

const server = Router();

server.get('/dobro/:numero', (req, resp) => {
    let n = Number(req.params.numero);
    let x = dobro(n);

    resp.send({
        dobro: x
    })

})

server.get('/somar', (req, resp) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let x = soma(a, b);

    resp.send({
        soma: x
    })
})

server.post('/somar', (req, resp) => {
    let a = req.body.a;
    let b = req.body.b;

    let x = soma(a, b);

    resp.send({
        soma: x
    })

})

server.post('/media', (req, resp) => {
    let { n1, n2, n3 } = (req.body);

    let x = media(n1, n2, n3);

    resp.send({
        media: x
    })

})

server.get('/tabuada', (req, resp) => {
    let a = Number(req.query.a);

    let x = tabuada(a);

    resp.send({
        tabuada: x
    })
})

server.get('/febre', (req, resp) => {
    let a = Number(req.query.a);

    let x = temperatura(a);

    resp.send({
        Febre: x
    })
})


server.get('/corprimaria/:cor', (req, resp) => {
    let a = req.params.cor;

    let x = corPrinmaria(a);

    resp.send({
        Primária: x
    })
})

server.post('/maiornumero', (req, resp) => {
    let a = req.body.a;

    let x = maiorNumero(a);

    resp.send({
        Maior: x
    })

})



export default server;