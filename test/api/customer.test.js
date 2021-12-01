import get from 'superagent';
import del from 'superagent';
import { StatusCodes } from 'http-status-codes';
import * as chai from 'chai';

const expect = chai.expect;

describe('Customer tests', () => {
    it('Create customer', async () => {
        //Aquí va el test
    });
    
    it('Get customer by Id', async () => {
        const id = 54321;
        const response = await get('https://localhost:8080/api/customer/'+id)
            .set('Content-type','application/json')
            .set('Accept','application/json');
        expect(response.status).to.equal(StatusCodes.OK);
        expect(response.body).to.have.property('customerId');
    });
    
    it('Get customer by name', async () => {
        //Aquí va el test
    });

    it('Get Customer by Username', async () => {
        const username = "spacegoat";
        const response = await get('https://localhost:8080/api/customer/username='+username)
            .set('Content-type','application/json')
            .set('Accept','application/json');
        expect(response.status).to.equal(StatusCodes.OK);
        expect(response.body).to.have.property('username');
    });

    it('Update customer', async () => {
        //Aquí va el test
    });

    it('Delete customer by Id', async () => {
        const id = 1;
        const response = await del('https://localhost:8080/api/customer/'+id)
            .set('Content-type','application/json')
            .set('Accept','application/json');
        expect(response.status).to.equal(204);
    });

    it('Delete all Customers', async () => {
        //Aquí va el test
    });

});