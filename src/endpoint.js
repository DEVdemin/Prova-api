import { Router } from 'express'
import { dobro, soma, tabuada, media, temperatura, corPrinmaria, maiorNumero, ingresso} from './service.js'

const server = Router();

server.get('/dobro/:numero', (req, resp) => {
    try {
        let n = Number(req.params.numero);
        let x = dobro(n);

        resp.send({
            dobro: x
        })
    }

    catch (err) {
        resp.send({
            erro: err.message
        })
    }

})

server.get('/somar', (req, resp) => {
    try{ 
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let x = soma(a, b);

    resp.send({
        soma: x
    })
}
catch(err){
    resp.send({
        erro:err.message
    })
}
})

server.post('/somar', (req, resp) => {
    try{ 
    let a = req.body.a;
    let b = req.body.b;

    let x = soma(a, b);

    resp.send({
        soma: x
    })
}
catch(err){
    resp.send({
        erro:err.message
    })
}
})

server.post('/media', (req, resp) => {
    try{ 
    let { n1, n2, n3 } = (req.body);

    let x = media(n1, n2, n3);

    resp.send({
        media: x
    })
    }
    catch(err){
        resp.send({
            erro: err.message
        })
    }
})

server.get('/tabuada', (req, resp) => {
    try{ 
    let a = Number(req.query.a);

    let x = tabuada(a);

    resp.send({
        tabuada: x
    })
}
catch(err){
    resp.send({
        erro: err.message
    })
}
})

server.get('/febre', (req, resp) => {
    try{ 
    let a = Number(req.query.a);

    let x = temperatura(a);

    resp.send({
        Febre: x
    })
}
catch(err){
    resp.send({
        erro: err.message
    })
}
})


server.get('/corprimaria/:cor', (req, resp) => {
    try{ 
    let a = req.params.cor;

    let x = corPrinmaria(a);

    resp.send({
        Primária: x
    })
}
catch(err){
    resp.send({
        erro:err.message
    })
}
})

server.post('/maiornumero', (req, resp) => {
    try{ 
    let a = req.body.a;

    let x = maiorNumero(a);

    resp.send({
        Maior: x
    })
    }
    catch(err){
        resp.send({
            erro:err.message
        })
    }
})

server.post('/ingresso', (req,resp) => {
    let a = req.body.a; 
    let b = req.body.b;
    let c = req.body.c;
    let d = req.body.d;

    let x = ingresso(a,b,c,d);

    resp.send({
        Total:x
    })
})

export default server;