# Employee Management System (Full Stack)

This is a full-stack application for managing employee data, built using **Spring Boot** for the backend and **React.js** for the frontend. The system allows users to perform CRUD (Create, Read, Update, Delete) operations on employee records, as well as user authentication features like login, registration, and logout.

## Features
- **User Authentication**:
  - Register new users.
  - Login to access the system.
  - Logout functionality to end sessions.
- **Employee Management**:
  - Add new employees.
  - View all employees.
  - Update employee details.
  - Delete employees.
- Cross-Origin Resource Sharing (CORS) support between backend and frontend.

## Technologies Used

### Backend:
- **Spring Boot**: For building REST APIs.
- **Spring Security**: For implementing authentication and authorization.
- **Hibernate/JPA**: For ORM to interact with MySQL database.
- **MySQL**: To store employee data and user credentials.
- **Lombok**: To reduce boilerplate code.
- **Gradle**: For dependency management.

### Frontend:
- **React.js**: For building the user interface.
- **Axios**: For making API requests to the backend.
- **Bootstrap**: For responsive and styled UI components.
- **React Router**: For routing between different pages in the app.
- **Context API/Redux**: For managing authentication state globally.

## Authentication Flow

### User Registration
- Users can create a new account by providing a username, password, and other required information.
- The backend will handle the registration logic and store user credentials securely in the database.

### User Login
- Users can log in using their credentials (username and password).
- Upon successful login, a JSON Web Token (JWT) is generated and sent back to the client for authentication.
- The frontend will store this token (e.g., in local storage) and include it in the headers of subsequent requests to protected routes.

### User Logout
- Users can log out, which will remove the JWT from local storage and invalidate the session.

