# sp_js_codes

SocialPilot JavaScript practice code snippets

# Todo App

A simple Todo app built with Node.js.

## Setup

### Clone the Repository

```bash
git clone -b todo_app https://github.com/sagarnanera/sp_js_codes.git
```

### Create Data Folder

Create a data folder in the project root.

```bash
mkdir data
```

Inside the data folder, create a data.txt file.

```bash
touch data/data.txt
```

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
yarn dev
```

The app will be accessible at http://localhost:8080.

## Usage

### API Endpoints

* GET /todo: Get all todos (query : {isCompleted:true/false})

* GET /todo/:id: Get a specific todo

* POST /todo: Create a new todo

* PUT /todo/:id: Update a todo

* DELETE /todo: Delete all todos

* DELETE /todo/:id: Delete a todo
