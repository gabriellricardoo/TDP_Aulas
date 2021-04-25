const chai = require('chai');
const expect = chai.expect;
const somarNs = (a,b) =>5

describe('Somas', () => {
    it('Soma de dois ns -> 2 e 3', (done) =>{
        const r = somarNs(2,3);
        expect(r).be.equal(5);
        done();
    })
})