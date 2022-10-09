const Intern = require('../lib/intern');

describe('Intern class', () => {
    it('Creates a new Intern', () => {
        const intern = new Intern('Jonathan Wijaya', '0711', 'jonathanwijayan@gmail.com', 'UTS');

        expect(intern.name).toEqual('Jonathan Wijaya');
        expect(intern.id).toEqual('0711');
        expect(intern.email).toEqual('jonathanwijayan@gmail.com');
        expect(intern.school).toEqual('UTS');
    });

    it('Checks all methods on the Intern Class', () => {
        const intern = new Intern('Jonathan Wijaya', '0711', 'jonathanwijayan@gmail.com', 'UTS');

        expect(intern.getName()).toEqual(intern.name);
        expect(intern.getID()).toEqual(intern.id);
        expect(intern.getEmail()).toEqual(intern.email);
        expect(intern.getSchool()).toEqual(intern.school);
        expect(intern.getRole()).toEqual('Intern');
    });
})