const Manager = require('../lib/manager');

describe('Manager class', () => {
    it('Creates a new Manager', () => {
        const manager = new Manager('Jonathan Wijaya', '0711', 'jonathanwijayan@gmail.com', '000');

        expect(manager.name).toEqual('Jonathan Wijaya');
        expect(manager.id).toEqual('0711');
        expect(manager.email).toEqual('jonathanwijayan@gmail.com');
        expect(manager.officeNumber).toEqual('000');
    });

    it('Checks all methods on the Manager Class', () => {
        const manager = new Manager('Jonathan Wijaya', '0711', 'jonathanwijayan@gmail.com', '000');

        expect(manager.getName()).toEqual(manager.name);
        expect(manager.getID()).toEqual(manager.id);
        expect(manager.getEmail()).toEqual(manager.email);
        expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
        expect(manager.getRole()).toEqual('Manager');
    });
})