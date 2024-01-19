# sp_js_codes

SocialPilot JavaScript practice code snippets

# Todo App

A simple Todo app built with Node.js and MongoDB.

## requirements

- login, register, forget password
- user -email, pwd (storing), organization
- todo- title, description, status, dueDate, creationDate, orders, tags
- functionalities: filter on status, order, sort by dueDate, search on tags and title
- list, view, edit, del

## Setup

### Clone the Repository

```bash
git clone -b todo_app_mern https://github.com/sagarnanera/sp_js_codes.git
```

### Environment variables

Create a .env file in the project root and include the absolute path to data.txt.

```bash
echo "DATA_FILE_PATH=$(pwd)/data/data.txt" > .env
```

### Install Dependencies

Navigate to the project directory and install the required dependencies.

```bash
cd basic_js
yarn
```

### Run the Application

Start the Todo app.

```bash
yarn start
```

The app will be accessible at http://localhost:8080.

## Usage

### API Endpoints

* GET /todo: Get all TODOs (query : {isCompleted:true/false})

* GET /todo/:id: Get a specific todo

* POST /todo: Create a new todo

* PUT /todo/:id: Update a todo

* DELETE /todo: Delete all TODOs

* DELETE /todo/:id: Delete a todo