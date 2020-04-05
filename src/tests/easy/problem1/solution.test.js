const _ = require('lodash');
const dataIntNumber = require('./data/int_number.json');
const dataFloatNumber = require('./data/float_number.json');
const { getListFuncProblem } = require('../../../helper/utils');

describe('TestCase Easy', () => {
    describe('TestCase Problem 1', () => {
        const listObj = getListFuncProblem(`${process.cwd()}/src/easy/problem1/**/solution.js`);
        it('Test with int number', async () => {
            _.forEach(listObj, func => {
                _.forEach(_.values(dataIntNumber), item => {
                    expect(func(item.input.arr, item.input.k)).toBe(item.output);
                });
            });
        });
        it('Test with float number', async () => {
            _.forEach(listObj, func => {
                _.forEach(_.values(dataFloatNumber), item => {
                    expect(func(item.input.arr, item.input.k)).toBe(item.output);
                });
            });
        });
    });
});
