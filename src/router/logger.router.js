import express from 'express'; 
import loggerController from '../controllers/loggerControlers.js';

const router = express.Router(); 

router.get('/loggerTest', loggerController.loggerTest); 

export default router; 