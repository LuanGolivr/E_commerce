import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';

import mongoConnection from '../src/instances/mongo';
import mainRoutes from '../src/routes/mainRoutes';

dotenv.config();

const server = express();
const dataBase = new mongoConnection();

server.use(cors());
server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({extended:true}));

server.use(mainRoutes);


server.use((req, res)=>{
    res.status(404).json({error: 'Page not Found'});
});

server.listen(process.env.PORT);

