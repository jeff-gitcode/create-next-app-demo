/**
 * @jest-environment node
 */

// import { createMocks, httpMocks } from "node-mocks-http";
const httpMocks = require('node-mocks-http');
const fetchMock = require('fetch-mock-jest');
import nock from "nock";

import { NextApiResponse } from "next";
import { GET } from "./route";
import { mockUser } from "./route.mocks";
import { createMocks } from "node-mocks-http";
// import fetchMock from "fetch-mock";

describe("/api/user", () => {

  beforeEach(() => {
    jest.resetModules();
    process.env = {
      NODE_ENV: "test",
      PATH_URL_BACKEND: "https://jsonplaceholder.typicode.com",
    };
  });

  test("returns a list of users", async () => {
    createMocks({
      method: "GET",
      url: "/users",
    });

    var url = process.env.PATH_URL_BACKEND + '/users';
    var users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    fetchMock.get(url, users)
      .post(url, { name: "Alice" });

    httpMocks.createResponse();

    const response = await GET();

    const result = await response.json();

    expect(response.status).toBe(200);
    expect(result.result).toEqual(users);

    // const req1 = createMocks({
    // 	method: 'POST',
    //   url: process.env.PATH_URL_BACKEND + '/users',
    // 	headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: {
    //     name: "Alice",
    //   },
    // });

    //   const { req, res } = createMocks();
    
    // expect(await response.json()).toEqual([
    //   { id: 1, name: "Alice" },
    //   { id: 2, name: "Bob" },
    // ]);

    //   const request = httpMocks.createRequest({
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     url: process.env.PATH_URL_BACKEND + '/users'
    // });

    //   const response = httpMocks.createResponse({
    //     body: [{
    //       id: 1,
    //       name: "Alice"
    //     }]
    //   });

    //   const resp = await GET();
    // var url = process.env.PATH_URL_BACKEND + '/users';
    // // nock(url!)
    // // .get('')
    // // .reply(200, {
    // //     data: {
    // //         id: 1,
    // //         title: "The weather is nice",
    // //         completed: true
    // //     }
    // // });   
    // var users = [
    //   { id: 1, name: "Alice" },
    //   { id: 2, name: "Bob" },
    // ];
    // fetchMock.get(url, users)
    //   .post(url, { name: "Alice" });

    // const response = await GET();
    // const result = await response.json();

    // expect(result.result).toEqual(users);
  });

});
