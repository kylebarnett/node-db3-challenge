const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
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

function add(schemeData) {
  return db('schemes').insert(schemeData)
}

function update(changes, id) {
  return db('schemes').where({ id }).update(changes)
}

function remove(id) {
  return db('schemes').where({ id }).del()
}