import { setLoggerLevel } from '../src/errorManagerment/logger.js';

import chai from 'chai'; 
import chaiHttp from 'chai-http'; 
import app from '../src/app.js'; 

const expect = chai.expect;

chai.use(chaiHttp);

describe('Productos API', () => {
    it('Debería obtener todos los productos', (done) => {
        chai.request(app)
            .get('/api/productos')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });
});
