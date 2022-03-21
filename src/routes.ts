import {Router, Request, Response } from 'express';

const  router = Router();

router.get('/',(request:Request, response:Response)=>{
    return response.json({ message:'Bem vindo a nossa DIO API' });
  });
  
  
  router.get('/usuarios',(request:Request, response: Response)=>{
    return response.json([
        {
            nome: 'João'
        },
        {
          nome: 'Maria'
        },
        {
          nome: 'Kate'
      }
    ]);   
  });


  export { router }
  