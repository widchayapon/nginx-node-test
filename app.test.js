const request = require('supertest');
const express = require('express');
const path = require('path');
const app = require('./app'); // สมมุติว่าแยก app ออกมา

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});

describe('GET /test', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/test');
    expect(res.statusCode).toEqual(200);
  });
});
