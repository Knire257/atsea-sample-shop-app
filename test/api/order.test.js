import  ajax  from 'superagent';
import { StatusCodes } from 'http-status-codes';
import * as chai from 'chai';

const expect = chai.expect;

describe('Order Tests', () => {
    it('Create an order', async () => {
        const response = await ajax.post('http://localhost:8080/api/order/')
            .send({
                "orderId": 4,
                "orderDate": "2017-02-28T19:52:39Z",
                "customerId": "54321",
                "productsOrdered": { "1": 1, "2": 1, "3": 1 }
            })
            .set('Content-type', 'application/json')
            .set('Accept', 'application/json');
        expect(response.status).to.equal(StatusCodes.CREATED);
        expect(response.body).to.have.property('orderId');
    });

    it('Get all orders', async () => {
        //Aquí va el test
    });

    it('Get order by Id', async () => {
        const id = 1;
        const response = await ajax.get('http://localhost:8080/api/order/'+id)
            .set('Content-type', 'application/json')
            .set('Accept', 'application/json');
        expect(response.status).to.equal(StatusCodes.OK);
        expect(response.body).to.have.property('orderId');
    });

    it('Update an order', async () => {
        //Aquí va el test
    });

    it('Get order by Id', async () => {
        const id = 1;
        const response = await ajax.get('http://localhost:8080/api/order/'+id)
            .set('Content-type', 'application/json')
            .set('Accept', 'application/json');
        expect(response.status).to.equal(StatusCodes.OK);
    });
});