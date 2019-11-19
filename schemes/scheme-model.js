const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findSteps
}

function find() {
  return db('schemes')
}

function findById(id) {
  return db('schemes').where({ id })
}

function findSteps(id) {
  return db('schemes as sc')
    .join('steps as s', 'sc.id', 's.id')
    .select('sc.id', 'scheme_name', 's.step_number', 's.instructions')
    .where({ scheme_id: id })
}