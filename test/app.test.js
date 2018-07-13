const mongo = require('../lib/mongodb');
const { assert } = require('chai');
const request = require('./request');

describe('app level', () => {
    it('returns 404 bad url', () => {
        return request
            .get('/bad') 
            .then(res => {
                assert.equal(res.status, 404);
            });
    });
});