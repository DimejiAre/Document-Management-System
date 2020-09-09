const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

const { expect } = chai;

chai.use(chaiHttp);

describe('index route', () => {
  it('should run', async () => {
    const response = await chai.request(app).get('/');
    expect(response).to.have.status(200);
  });
});
