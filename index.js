const {employee, department, role} = require('./models')
let employees = []
let roles = []
let departments =[]

async function promptUser(message) {
    try {
        const { r } = await require('inquirer').prompt(
            {
                type: 'input',
                name: 'r',
                message: message

            })
        return r
    } catch (e) { console.log(e) }
    return null
}
async function getNum(message, isId) {
    try {
        const { r } = await require('inquirer').prompt(
            {
                type: 'input',
                name: 'r',
                message: message,
                validate: async (r) => { return validateNumber(r, isId) }
            })
        return r
    } catch (e) { console.log(e) }
    return null
}
async function getChoice(mess, ch) {
    try {
        const { r } = await require('inquirer').prompt(
            {
                type: 'rawlist',
                name: 'r',
                message: mess,
                choices: ch
            })
        return r
    } catch (e) { console.log(e) }
    return null
}

async function employeeCMS() {
    console.log('Welcome to the employee cms system!')
    while(true){
        const choice = await getChoice('Please select an option:', ['View', 'Add', 'Exit'])
        if(choice === 'View') {

        } else if (choice === 'Add') {
            const add = await getChoice('Please select which you would like to add:', ['Department', 'Role', 'Employee'])
        } else {
            break;
        }
    }
    console.log('Goodbye!')
}
employeeCMS()