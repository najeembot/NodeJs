'use strict';

const fs   = require('fs');
const uuid = require('uuid/v4');

const DEFAULT_ENCODING = 'utf8';

class Todo {
  constructor(filename) {
    this._filename = filename;
  }

  async create(description) {
    const todos = await this.read();

    const todo = {
      id:   uuid(),
      done: false,

      description
    };

    todos.push(todo);

    await this._save(todos);

    return todo;
  }

  read(id) {
    return new Promise(resolve => {
      let ID = id;
      if (typeof ID === 'undefined') {
        fs.readFile(this._filename, DEFAULT_ENCODING, (error, data) => {
          if (error)
            return resolve([]);

          return resolve(JSON.parse(data));
        });
      } else {
        let todos = "";
        fs.readFile(this._filename, DEFAULT_ENCODING, (error, data) => {
           if (error) throw error;
           todos = JSON.parse(data);
           const todo = todos.find(t => t.id === id);
           console.log(todo);
           if (todo == null) {
               const error = new Error(`To-do with ID ${id} does not exist`);
               error.code = 'not-found';
               throw error;
               return resolve([]);
           }
           return resolve(todo);
        });
      }
    });
  }

  async update(id, description) {
    let todos = "";
    fs.readFile(this._filename, DEFAULT_ENCODING, (error, data) => {
       if (error) throw error;
       todos = JSON.parse(data);
       const todo = todos.find(t => t.id === id);
       console.log(todo);
       if (todo == null) {
           const error = new Error(`To-do with ID ${id} does not exist`);
           error.code = 'not-found';
           throw error;
       }
       todo.description = description;
       this._save(todos);
       return todo;
    });
  }

  async mark(id, mark) {
    let todos = "";
    fs.readFile(this._filename, DEFAULT_ENCODING, (error, data) => {
       if (error) throw error;
       todos = JSON.parse(data);
       const todo = todos.find(t => t.id === id);
       console.log(todo);
       if (todo == null) {
           const error = new Error(`To-do with ID ${id} does not exist`);
           error.code = 'not-found';
           throw error;
       }
       todo.done = mark;
       this._save(todos);
       return todo;
    });
  }

  async delete_(id) {
    const todos = await this.read();
    let ID = id;
    if (typeof ID !== 'undefined') {
      const filteredTodos = todos.filter(t => t.id !== id);
      return this._save(filteredTodos);
    } else {
      const clearedTodos = [];
      return this._save(clearedTodos);
    }

  }

  // Methods starting with underscore should not be used outside of this class
  _save(todos) {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        this._filename,
        JSON.stringify(todos, null, 2),
        error => error == null
          ? resolve()
          : reject(error)
      );
    });
  }
}

module.exports = Todo;
