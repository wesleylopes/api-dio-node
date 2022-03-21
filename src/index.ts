import express, {Request, Response} from 'express';
import { router } from './routes';

const server = express();

server.use(express.json());
server.use(router);


server.listen(5000),()=>{
  console.log('Servidor on na porta 5000'); 

};

//Criar Usuario 
//Selecionar Usuario 
//Editar Usuarios 
//Deletar Usuario 

//Get
//Put/Patch -> Atualizar
//Update -> Update
//Delete