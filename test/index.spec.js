/* global describe, it, before */
import chai from 'chai';

chai.expect();
const expect = chai.expect;

let lib;

describe('Checking test config has no problems', () => {
    before(() => {
        console.log('before');
    });

    describe('super simple test', () => {
        it('should pass', () => {
            expect(true).to.be.equal(true);
        });
    });
}); 