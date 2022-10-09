const employeeCard = employee => {

    const managerCard = (managerInfo) => {
        return `
        <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">${managerInfo.getName()}</p>
                    <p class="subtitle is-6">${managerInfo.getRole()}</p>
                </div>
            </div>

            <div class="content">
                ID: ${managerInfo.getID()}
                <br>
                Email: ${managerInfo.getEmail()}
                <br>
                Office Number: ${managerInfo.getOfficeNumber()}
            </div>
        </div>
    </div>
    `
    }

    const engineerCard = engineerInfo => {
        return `
        <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">${engineerInfo.getName()}</p>
                    <p class="subtitle is-6">${engineerInfo.getRole()}</p>
                </div>
            </div>

            <div class="content">
                ID: ${engineerInfo.getID()}
                <br>
                Email: ${engineerInfo.getEmail()}
                <br>
                Github Username: ${engineerInfo.getGithub()}
            </div>
        </div>
    </div>
    `
    }

    const internCard = internInfo => {
        return `
            <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">${internInfo.getName()}</p>
                    <p class="subtitle is-6">${internInfo.getRole()}</p>
                </div>
            </div>

            <div class="content">
                ID: ${internInfo.getID()}
                <br>
                Email: ${internInfo.getEmail()}
                <br>
                School: ${internInfo.getSchool()}
            </div>
        </div>
    </div>
    `
    }

    const card = [];

    card.push(employee
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => managerCard(manager))
    );

    card.push(employee
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => engineerCard(engineer))
        .join("")
    );

    card.push(employee
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => internCard(intern))
        .join("")
    );

    return card.join("")
}

const generateHTMLTemplate = employee => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <title>Team Profile</title>
    </head>

    <body>

    ${employeeCard(employee)}

    </body>
</html>
    `
};

module.exports = generateHTMLTemplate