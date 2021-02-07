/**
* Test out API Endpoints via Supertest...
*/
import { Logger } from '../common/Logger';

const app = require('../server'); // Link to your server file

const supertest = require('supertest');
const request = supertest(app);

let descGet1 = 'GET /api/v1/parse should return Code 404 - Not Found...';
it(descGet1, async done => {
  const response = await request.get('/api/v1/parse')
  expect(response.status).toBe(404)
  done()
});

let descPost1Happy = 'POST input data delimited by four zeroes and three zeroes to /api/v1/parse should return output with trailing zeroes...';
it(descPost1Happy, async done => {
  let sWho = `server.test::${descPost1Happy}`
  const input = { data: "JOHN0000MICHAEL0009994567" };
  console.debug(`${sWho}: input = `, input);
  const response =
    await request.post('/api/v1/parse')
      .send(input);

  console.debug(`${sWho}: response.status = `, response.status);
  expect(response.status).toBe(200);


  console.debug(`${sWho}: response.body = `, response.body);
  expect(response.body).toEqual(
    {
      statusCode: 200,
      data: {
        firstName: "JOHN0000",
        lastName: "MICHAEL000",
        clientId: "9994567"
      }
    }
  );

  done();
});

let descPost1Exception = 'POST input data NOT delimited by four zeroes and three zeroes to /api/v1/parse should return Code 500...';
it(descPost1Exception, async done => {
  let sWho = `server.test::${descPost1Exception}`

  // delimited by three zeroes and two zeroes...should be four zeroes and three zeroes...
  const input = { data: "JOHN000MICHAEL009994567" };

  console.debug(`${sWho}: input = `, input);
  const response =
    await request.post('/api/v1/parse')
      .send(input);

  console.debug(`${sWho}: response.status = `, response.status);
  expect(response.status).toBe(500);

  console.debug(`${sWho}: response.body = `, response.body);
  expect(response.body).toEqual(
    {
      statusCode: 500,
      error: "Cannot parse input"
    }
  );

  done();
});

it('GET /api/v2/parse should return Code 404 - Not Found', async done => {
  const response = await request.get('/api/v2/parse')
  expect(response.status).toBe(404)
  done()
});

let descPost2Happy = 'POST input data delimited with four zeroes and three zeroes to /api/v2/parse should return output without trailing zeroes and dash-separated clientId...';
it(descPost2Happy, async done => {
  let sWho = `server.test::${descPost2Happy}`
  const input = { data: "JOHN0000MICHAEL0009994567" };
  console.debug(`${sWho}: input = `, input);
  const response =
    await request.post('/api/v2/parse')
      .send(input);

  expect(response.status).toBe(200);
  console.debug(`${sWho}: response.status = `, response.status);

  console.debug(`${sWho}: response.body = `, response.body);

  expect(response.body).toEqual(
    {
      statusCode: 200,
      data: {
        firstName: "JOHN",
        lastName: "MICHAEL",
        clientId: "999-4567"
      }
    }
  );

  done();
});

let descPost2Exception = 'POST input data NOT delimited by four zeroes and three zeroes to /api/v2/parse should return Code 500...';
it(descPost2Exception, async done => {
  let sWho = `server.test::${descPost2Exception}`

  // delimited by three zeroes and two zeroes...should be four zeroes and three zeroes...
  const input = { data: "JOHN000MICHAEL009994567" };

  console.debug(`${sWho}: input = `, input);
  const response =
    await request.post('/api/v2/parse')
      .send(input);

  console.debug(`${sWho}: response.status = `, response.status);
  expect(response.status).toBe(500);

  console.debug(`${sWho}: response.body = `, response.body);
  expect(response.body).toEqual(
    {
      statusCode: 500,
      error: "Cannot parse input"
    }
  );

  done();
});