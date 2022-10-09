const Employee = require('../lib/employee');

describe('Employee class', () => {
    it('Creates a new employee', () => {
        const employee = new Employee('Jonathan Wijaya', '0711', 'jonathanwijayan@gmail.com');

        expect(employee.name).toEqual('Jonathan Wijaya');
        expect(employee.id).toEqual('0711');
        expect(employee.email).toEqual('jonathanwijayan@gmail.com');
    });

    it('Checks all methods on the Employee Class', () => {
        const employee = new Employee('Jonathan Wijaya', '0711', 'jonathanwijayan@gmail.com');

        expect(employee.getName()).toEqual(employee.name);
        expect(employee.getID()).toEqual(employee.id);
        expect(employee.getEmail()).toEqual(employee.email);
        expect(employee.getRole()).toEqual('Employee');
    });
})