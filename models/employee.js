const db = require('./../config')

const employee = {
    getAll(cb) {
        db.query('SELECT * FROM employees', (err, emps) => {
            if (err) throw err
            // return items
            cb(emps)
        })
    },
    createEmployee(emp, cb) {
        db.query('INSERT INTO employees SET ?', emp, err => {
            if (err) throw err
            console.log('CREATED: ' + emp)
            cb()
        })
    },
    updateEmployee(updates, id, cb) {
        db.query('UPDATE employees SET ? WHERE ?', [updates, { id: id }], err => {
            if (err) throw err
            cb()
        })
    },
    deleteEmployee(id, cb) {
        db.query('DELETE FROM employees WHERE ?', { id: id }, err => {
            if (err) throw err
            cb()
        })
    }
}

module.exports = employee