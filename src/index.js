import 'dotenv/config'
import endpoint from './endpoint.js'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());
server.use(endpoint);


server.listen(process.env.PORT,
            () => console.log(`API online na porta ${process.env.PORT}`));