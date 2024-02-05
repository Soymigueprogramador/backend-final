import {Router} from 'express';
import bodyParser from 'body-parser';
import usersControllers from '../controllers/usersControllers.js';
import { autorizacion1, autorizacion2 } from '../middlewares/authMiddle.js';
//import upload from '../middlewares/uploadFiles.js';

const router = Router();

router.use(bodyParser.urlencoded({ extended: true }));

//router.post('/users/:uid/documents',upload.uploader.array('archivos1'),usersController.documents)

//router.get('/users/premium/:email',authUser, usersController.premium)

//router.put('/users/maintenanceTOU',authAdmin, usersController.usersMaintenanceTOU)

//router.delete('/users/eliminarUsuario', authAdmin, usersController.usersDelete)

//router.delete('/users/depurarUsuarios', authAdmin, usersController.usersDebugging)

export default router; 