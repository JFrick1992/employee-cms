const db = require('./../config')

const role = {
    getAll(cb) {
        db.query('SELECT * FROM roles', (err, items) => {
            if (err) throw err
            // return items
            cb(items)
        })
    },
    createRole(role, cb) {
        db.query('INSERT INTO roles SET ?', role, err => {
            if (err) throw err
            cb()
        })
    },
    updateItem(updates, id, cb) {
        db.query('UPDATE roles SET ? WHERE ?', [updates, { id: id }], err => {
            if (err) throw err
            cb()
        })
    },
    deleteItem(id, cb) {
        db.query('DELETE FROM roles WHERE ?', { id: id }, err => {
            if (err) throw err
            cb()
        })
    }
}

module.exports = role