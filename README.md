# CinemaCloud : A Netflix Clone

This project is a clone of Netflix, designed to demonstrate the capabilities of a modern full-stack application. It utilizes React for the frontend and Node.js with Express for the backend. The state is managed via Redux Toolkit, with Firebase handling authentication and deployment. Styled Components are used for styling, Axios for API requests, and MongoDB as the database.

## Features

- User Authentication using Firebase
- Movie Streaming
- Responsive User Interface
- User Profile Management
- Ability to Add Favorites

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)
- MongoDB
- Git

## Installation

Follow these steps to get your development environment running:

### Clone the repository

```bash
git clone https://github.com/yourusername/netflix-clone.git
cd netflix-clone
```

### Install React Dependencies
Navigate to the client directory and install the necessary dependencies for the React application:

```bash
cd client
npm install
```

### Install Node Dependencies
Navigate to the server directory and install the necessary dependencies for the Node.js server:

```bash
cd ../server
npm install
```

### Configuration
Create a .env file in both the client and server directories. Update these files with the necessary API keys and database connection strings.

### Running the Application
Start the Node App
In the server directory, start the Node.js application:

```bash
npm start
```

Start the React App
Open a new terminal, navigate to the client directory, and start the React application:
```bash
npm start
```

-The React app will run on http://localhost:3000 and the server will run on http://localhost:5000.

### Notes:
- Ensure that the directory paths (`client` or `server`) are correct as per your project structure.
- Replace placeholder values in `.env` examples with actual data necessary for your application's configuration.
