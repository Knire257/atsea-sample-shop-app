import  get  from 'superagent';
import { StatusCodes } from 'http-status-codes';
import * as chai from 'chai';

const expect = chai.expect;

describe('Products', () => {
    it('Getting all products using GET', async () => {
        const response = await get('https://localhost:8080/api/product')
            .set('Content-type','application/json')
            .set('Accept','application/json');
        expect(response.status).to.equal(StatusCodes.OK);
        expect(response.body).to.have.property('name');
    });

    it('Getting single product by ID using GET', async () => {
        const id = 32;
        const response = await get('https://localhost:8080/api/product/'+id)
            .set('Content-type','application/json')
            .set('Accept','application/json');
        expect(response.status).to.equal(StatusCodes.OK);
        expect(response.body).to.have.property('name');
    });
});