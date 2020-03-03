const db = require('./../config')

const employee = {
    getAll(cb) {
        db.query('SELECT * FROM employees', (err, items) => {
            if (err) throw err
            // return items
            cb(items)
        })
    },
    createDepartment(dept, cb) {
        db.query('INSERT INTO employees SET ?', dept, err => {
            if (err) throw err
            cb()
        })
    },
    updateItem(updates, id, cb) {
        db.query('UPDATE employees SET ? WHERE ?', [updates, { id: id }], err => {
            if (err) throw err
            cb()
        })
    },
    deleteItem(id, cb) {
        db.query('DELETE FROM employees WHERE ?', { id: id }, err => {
            if (err) throw err
            cb()
        })
    }
}

module.exports = employee