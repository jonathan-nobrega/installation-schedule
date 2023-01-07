
const { describe, expect, test } = require('@jest/globals')
const planningDates = require('../data/planningDates');
const buildings = require('../data/buildingsList');
const employees = require('../data/employeesList');

describe('Buildings', () => {
    test('Should bring buildings list', () => {
        expect(buildings).not.toBeNull();
        expect(buildings).toEqual(expect.arrayContaining([
            expect.objectContaining({
                type: expect.any(Number),
                description: expect.any(String),
                requestDate: expect.any(String)
            })
        ]));
    })
})

describe('Employess', () => {
    test('Should bring employees list', () => {
        expect(employees).not.toBeNull();
        expect(employees).toEqual(expect.arrayContaining([
            expect.objectContaining({
                name: expect.any(String),
                type: expect.any(String),
                title: expect.any(String),
                timeOff: expect.any(String)
            })
        ]));
    })
})

describe('Planning dates', () => {
    test('Should bring list of dates', () => {
        expect(planningDates).not.toBeNull();
        expect(planningDates).toEqual(expect.arrayContaining([expect.any(String)]))
    })
})
