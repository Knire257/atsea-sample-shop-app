import ajax from 'superagent';
import { StatusCodes } from 'http-status-codes';
import * as chai from 'chai';

const expect = chai.expect;
const token;

describe('Login And Purchase', () => {
    it('login', async () => {
        //aquí va la prueba
        //Necesitamos meter el token que nos dan en el response para poder hacer la prueba de purchase
    });

    it('Purchase', async () => {
        const response = await ajax.get('http://localhost:8080/purchase/')
            .set('Content-type', 'application/json')
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer '+token);
        expect(response.status).to.equal(StatusCodes.OK);
        expect(response.body).to.have.property('message');

    });
});