import {Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/CreateUserController';

const  router = Router();

router.get('/',(request:Request, response:Response)=>{
    return response.json({ message:'Bem vindo a nossa DIO API' });
  });
  
  const createUserController =new CreateUserController();

   router.post('/usuarios', createUserController.handle);


  export { router }
  