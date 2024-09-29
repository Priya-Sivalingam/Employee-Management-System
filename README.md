# Employee Management System (Full Stack)

![image](https://github.com/user-attachments/assets/02dac985-80ce-43ab-9636-d72692710b50)


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

![image](https://github.com/user-attachments/assets/a1cd20ac-0974-4c4f-8876-75e76bc5616c)

![image](https://github.com/user-attachments/assets/81cc6835-b28a-4979-baa6-2708c75b524a)

![image](https://github.com/user-attachments/assets/99444817-29cb-4ff1-a5d0-ea2df9c84d9b)

![image](https://github.com/user-attachments/assets/01e170d7-d028-4a01-9331-7fdb9c5371e5)






## Technologies Used

### Backend:
- **Spring Boot**: For building REST APIs.
- **Spring Security**: For implementing authentication and authorization.
- **Hibernate/JPA**: For ORM to interact with MySQL database.
- **MySQL**: To store employee data and user credentials.
- **Lombok**: To reduce boilerplate code.
- **Gradle**: For dependency management.

### Frontend:
[Demo](https://66f98fb7b606fe32b534bdd6--delightful-florentine-9d8812.netlify.app/)
- **React.js**: For building the user interface.
- **Axios**: For making API requests to the backend.
- **Bootstrap**: For responsive and styled UI components.
- **React Router**: For routing between different pages in the app.
- **Context API/Redux**: For managing authentication state globally.

## Authentication Flow

### User Registration
![image](https://github.com/user-attachments/assets/67268860-6cd7-4228-8890-cfe4c6112acb)

- Users can create a new account by providing a username, password, and other required information.
- The backend will handle the registration logic and store user credentials securely in the database.

### User Login
![image](https://github.com/user-attachments/assets/be3466a5-24a3-4177-a7e3-31770dbc3f07)

- Users can log in using their credentials (username and password).
- Upon successful login, a JSON Web Token (JWT) is generated and sent back to the client for authentication.
- The frontend will store this token (e.g., in local storage) and include it in the headers of subsequent requests to protected routes.

### User Logout
- Users can log out, which will remove the JWT from local storage and invalidate the session.

