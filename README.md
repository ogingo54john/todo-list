
# To-Do List REST API with MySQL

## Description
A simple To-Do List REST API built with **Node.js**, **Express**, and **MySQL**. This API allows users to manage tasks with titles, descriptions, and activities.

## To-Do Structure

### To-Do Table
- **Title**: The main task (e.g., "Visit children's home").
- **Description**: A short description of the title (e.g., "Showing love").

### Activity Table
- **Linked to To-Do Table**: Activities are linked to a specific to-do item via a unique ID.
- **Stores Activities**: Under each to-do, activities can be listed (e.g., "Prepare the home for the visit").

## Features
- Create, read, update, and delete To-Do items.
- Add, update, and delete activities under each to-do item.
- Retrieve activities by a specific to-do title.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ogingo54john/todo-list.git
   cd todo-list
   npm install
   ```

2. **Setup Environment Variables**:
   - Create a file called `.env` in the root directory.
   - Copy the content from `.envf` in the `config` directory and paste it into the newly created `.env` file.

## Database Setup

### Adding `todo.sql`
This project uses a relational database, and the SQL file required to set up the tables is included.

1. Copy the `todo.sql` file from the `config` directory.
2. Run the SQL file in your MySQL database to create the necessary tables.

## Starting the Project

Start the server with the following command:
```bash
npm start
```

## API Endpoints

### Todos API

- **GET /api/todos**
  - Fetch all to-do items.
  
- **GET /api/todos/:id**
  - Fetch a specific to-do item by ID.

- **POST /api/todos**
  - Create a new to-do item. Example JSON body:
    ```json
    {
      "title": "Test Todo",
      "description": "Description here"
    }
    ```

- **PUT /api/todos/:id**
  - Update an existing to-do item. Example JSON body:
    ```json
    {
      "title": "Updated",
      "description": "Updated description",
      "completed": true
    }
    ```

- **DELETE /api/todos/:id**
  - Delete a specific to-do item by ID.

### Activity API

- **GET /api/activity/**
  - Fetch all activities.

- **GET /api/activity/:id**
  - Fetch a specific activity by ID.

- **POST /api/activity/add**
  - Add a new activity. Example JSON body:
    ```json
    {
      "todo_id": 1,
      "activity": "Prepare for the visit"
    }
    ```

- **PUT /api/activity/edit/:id**
  - Update an existing activity. Example JSON body:
    ```json
    {
      "activity": "Updated activity",
      "completed": true
    }
    ```

- **DELETE /api/activity/delete/:id**
  - Delete a specific activity by ID.

- **GET /api/activity/todo/:todo_id**
  - Get all activities under a specific to-do item by `todo_id`.

## Testing the API

Use **Postman** or **cURL** to test the API endpoints. Examples of how to use these tools are provided for each API call above.

