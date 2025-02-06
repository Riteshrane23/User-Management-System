# User Management System

## Description

The **User Management System** is a responsive web application built using **React** and **Material UI**.

## Features

*   **User Management:**  Add, edit, and delete user accounts with ease.
*   **Search:** Quickly locate specific users by first name, last name, or email address.
*   **Sort:**  Organize user lists by name or email in ascending or descending order.
*   **Pagination:** Browse large user datasets efficiently with a paginated view.  Configure the number of users displayed per page.
*   **Confirmation Dialogs:** Prevent accidental data loss with confirmation prompts before deleting user accounts.
*   **Responsive Design:** Provides optimal viewing experience across various devices (desktops, tablets, and mobile phones).
*   **API Integration:** Fetches user data from a configurable REST API, allowing seamless integration with backend systems.

## Prerequisites

*   [Node.js](https://nodejs.org/) (v14 or above) -  JavaScript runtime environment
*   [npm](https://www.npmjs.com/) (v6 or above) - Node package manager (usually comes with Node.js)
*   A code editor (e.g., VS Code, Sublime Text, Atom)

## Setup and Installation

### 1. Clone the Repository:
    
   ```bash
      git clone https://github.com/your-username/user-management-system.git
   ```

### 2. Navigate to the Project Directory

    ```bash
    cd user-management-system
    ```
### 3. Install Dependencies

    ```bash
    npm install
    ```

### 4. Run the Development Server

    ```bash
    npm run dev
    ```
### 5. Access the Application
    ```bash
    http://localhost:5173
    ```


### Folder Structure

/user-management-system
│
├── /public           # Public files like index.html, favicon.ico, etc.
├── /src              # Source code files
│   ├── /components   # Reusable components (e.g., Avatar, Table, ConfirmationDialog)
│   ├── /services     # API services (e.g., apiService.ts) to handle data fetching
│   ├── /pages        # Pages like UserList, AddUser, EditUser    
│   ├── App.tsx       # Main component where the routing and layout are set up
│   └── index.tsx     # Entry point for React
│
├── /node_modules     # Installed dependencies
├── package.json      # Project metadata and dependencies
└── README.md         # Documentation (this file)

### Screenshots

### List View
![image](https://github.com/user-attachments/assets/2308e674-2c48-4baa-a0d5-cb1f94d05f49)

### Search
![image](https://github.com/user-attachments/assets/95cb9acc-e78c-43aa-92da-63def196c641)

### Edit
![image](https://github.com/user-attachments/assets/c24ea962-98dd-445c-9f81-5cbe55cb1b32)

### Delete
![image](https://github.com/user-attachments/assets/9751daa3-de9c-41eb-a12f-2d47e8b0f95b)

### Add
![image](https://github.com/user-attachments/assets/f9ab6b21-c926-4122-bfa0-e5825f32b0dc)

### Detail View
![image](https://github.com/user-attachments/assets/cab54808-52b2-4fca-8252-7cc2fdb2041f)
