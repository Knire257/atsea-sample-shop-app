import  get from 'superagent';
import { StatusCodes } from 'http-status-codes';
import * as chai from 'chai';

const expect = chai.expect;

describe('Login', () => {
    it('login', async () => {
        //aquí va la prueba
    });

    it('Create an order', async () => {
      const response = await get('https://localhost:8080/purchase')
          .set('Content-type', 'application/json')
          .set('Accept', 'application/json')
          
      expect(response.status).to.equal(StatusCodes.OK);
      expect(response.body).to.have.property('message');
    });
});