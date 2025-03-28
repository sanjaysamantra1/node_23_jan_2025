import * as chai from "chai";
const { expect } = chai;
import { default as chaiHttp, request } from "chai-http";
import sinon from 'sinon';

import { EmployeeModel } from "../../src/models/employee_model.js";
import { app } from "../../app.js";
import { before } from "mocha";

chai.use(chaiHttp);
// imports end here...

describe('Test Suite for Emplyee CRUD', () => {
    let findStub;
    let findByIdStub;

    before(()=>{
        console.log('Before All')
    })
    after(()=>{
        console.log('After All')
    })
    beforeEach(() => {
        findStub = sinon.stub(EmployeeModel, 'find');
        findByIdStub = sinon.stub(EmployeeModel, 'findById');
    })
    afterEach(() => {
        findStub.restore();
        findByIdStub.restore();
    })

    it('Should verify getAllEmployees', async () => {
        const mockEmployees = [
            { _id: 111, "eId": "101", "name": "Adarsh", "sal": 5000, "gender": "male" },
            { _id: 222, "eId": "101", "name": "Adarsh", "sal": 5000, "gender": "male" },
        ];
        findStub.resolves(mockEmployees);
        const res = await request.execute(app).get('/employees');
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(mockEmployees);
    });
    it('Should verify getEmployeeById', async () => {
        const mockEmployee = { _id: 111, "eId": "101", "name": "Adarsh", "sal": 5000, "gender": "male" };

        findByIdStub.resolves(mockEmployee);
        const res = await request.execute(app).get('/employees/111');
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(mockEmployee);
    });
    it('Should return 404 for getEmployeeById', async () => {
        findByIdStub.resolves(null);
        const res = await request.execute(app).get('/employees/111');
        expect(res).to.have.status(404);
        expect(res.text).to.equal('Employee Not Found');
    });
});




