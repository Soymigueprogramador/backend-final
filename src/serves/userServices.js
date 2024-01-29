import { usersDataManager as DAOUsers } from '../dao/userDataManager.js';

class UsersServices {
    constructor (daoUsers) {
        this.daoUsers= new DAOUsers ()
    }

    async obtenerUsuarioPorEmail (direccionDeCorreo) {
        return await this.daoUsers.obtenerUsuarioPorEmail (direccionDeCorreo)
    }
    async obtenerUsuarioPorId   (id) {
      
        return await this.daoUsers.obtenerUsuarioPorId (id)
    }
    async crearUsuario  (name,email,password,typeofuser,last_name,age) {
        return await this.daoUsers.crearUsuario (name,email,password,typeofuser,last_name,age)
    }
    async obtenerUsuarioPorCartid (cartId) {
    
        return await this.daoUsers.obtenerUsuarioPorCartid (cartId)
    }

    async obtenerUsuarios () {
        
        return await this.daoUsers.obtenerUsuarios ()
    }

    async actualizarUsuario (email, usuario) {
        return await this.daoUsers.actualizarUsuario (email,usuario)
    }
    async actualizarUsuarioUltimoLog  (email) {
        return await this.daoUsers.actualizarUsuarioUltimoLog  (email)
    }
    async actualizarDocumentosSubidos  (id,nombre,linkDelArchivo) {
        return await this.daoUsers.actualizarDocumentosSubidos   (id,nombre,linkDelArchivo)
    }

    async actualizarType (id) {
        return await this.daoUsers.actualizarType (id)
    }

    async eliminarUsuario (id) {
        return await this.daoUsers.eliminarUsuario (id)
    }
}

export const usersServices = new UsersServices(DAOUsers); 