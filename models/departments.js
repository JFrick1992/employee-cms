const db = require('./../config')

const department = {
    getAll(cb) {
        db.query('SELECT * FROM departments', (err, items) => {
            if (err) throw err
            // return items
            cb(items)
          })
    },
    createDepartment (dept, cb) {
        db.query('INSERT INTO departments SET ?', dept, err => {
          if (err) throw err
          cb()
        })
      },
      updateItem (updates, id, cb) {
        db.query('UPDATE departments SET ? WHERE ?', [updates, { id: id }], err => {
          if (err) throw err
          cb()
        })
      },
      deleteItem (id, cb) {
        db.query('DELETE FROM departments WHERE ?', { id: id }, err => {
          if (err) throw err
          cb()
        })
      }
}

module.exports = department