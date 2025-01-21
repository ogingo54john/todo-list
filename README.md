# To-Do List REST API with MySQL

## Description
A simple To-Do List REST API built with Node.js, Express, and MySQL.
## wat the todo contains
   - the to do list contain a title, a short description about the title
   - under activities now we list the planned activities
## model structure
 todo table
   - records the todo title e.g Visit children home
   - record short description about the title e.g showing love 
Activity table
   - linked to todo table by unique id
   - store the activity under a specific id 

## Features
- Create, read, update, and delete to-do items.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ogingo54john/todo-list.git
   cd todo-list
   npm install
   create a file called .env in the root directory and copy the content in .envf in the config directory

## Adding todo.sql
   i have used relational database and attached the sql file
   copy the sql file from the config directory
   run the sql file which will create the todo tables

## Starting the project
   npm start

## Use Postman or cURL to test 
  ## todos api
   GET /api/todos
   GET /api/todos/:id
   POST /api/todos (JSON: { "title": "Test Todo", "description": "Description here" })
   PUT /api/todos/:id (JSON: { "title": "Updated", "description": "Updated description", "completed": true })
   DELETE /api/todos/:id

## activity apis
   GET /api/activity/
   GET /api/activity/:id
   POST /api/activity/add
   PUT /api/activity/edit/:id
   DELETE /api/activity/delete/:id
   GET /api/activity/todo/:to-id  --- this will get all the activity under a given title

## inserting into todos

