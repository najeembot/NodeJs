'use strict';

const deserializeTodo = require('./deserializeTodo');

function markAsDone(todo, request, response) {
  const id = request.params.id;
  todo.mark(id, true)
    .then(todo => {
      response.json({ todo });
      response.end();
    })
    .catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
};

module.exports = markAsDone;
