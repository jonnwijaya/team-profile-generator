const Engineer = require('../lib/engineer');

describe('Engineer class', () => {
    it('Creates a new engineer', () => {
        const engineer = new Engineer('Jonathan Wijaya', '0711', 'jonathanwijayan@gmail.com', 'jonnwijaya');

        expect(engineer.name).toEqual('Jonathan Wijaya');
        expect(engineer.id).toEqual('0711');
        expect(engineer.email).toEqual('jonathanwijayan@gmail.com');
        expect(engineer.github).toEqual('jonnwijaya');
    });

    it('Checks all methods on the engineer Class', () => {
        const engineer = new Engineer('Jonathan Wijaya', '0711', 'jonathanwijayan@gmail.com', 'jonnwijaya');

        expect(engineer.getName()).toEqual(engineer.name);
        expect(engineer.getID()).toEqual(engineer.id);
        expect(engineer.getEmail()).toEqual(engineer.email);
        expect(engineer.getGithub()).toEqual(engineer.github);
        expect(engineer.getRole()).toEqual('Engineer');
    });
})