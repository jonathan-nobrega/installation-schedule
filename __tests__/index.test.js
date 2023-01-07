const { describe, expect, test } = require('@jest/globals');
const installationPlan = require('../index');

describe('Planning dates', () => {
    test('Should bring list of dates', () => {
        expect(installationPlan).not.toBeNull();
        expect(installationPlan).toEqual(expect.arrayContaining([
            expect.objectContaining({
                date: expect.any(String),
                installations: expect.anything()
            })
        ]));
    });
});