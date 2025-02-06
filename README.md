# User Management System

## Description

The **User Management System** is a responsive web application built using **React** and **Material UI**. It empowers administrators to efficiently manage user data through features like viewing, searching, sorting, adding, editing, and deleting users.  The application intelligently fetches user data from a configured API endpoint.  As a fallback, when offline, it seamlessly utilizes data stored in local storage, ensuring continued functionality. The system incorporates pagination for efficient data handling, flexible sorting options, and confirmation dialogs to prevent accidental data loss during deletion.

## Features

*   **User Management:**  Add, edit, and delete user accounts with ease.
*   **Search:** Quickly locate specific users by first name, last name, or email address.
*   **Sort:**  Organize user lists by name or email in ascending or descending order.
*   **Pagination:** Browse large user datasets efficiently with a paginated view.  Configure the number of users displayed per page.
*   **Offline Support:**  Continue managing users even without an active internet connection, leveraging locally stored data.
*   **Confirmation Dialogs:** Prevent accidental data loss with confirmation prompts before deleting user accounts.
*   **Responsive Design:** Provides optimal viewing experience across various devices (desktops, tablets, and mobile phones).
*   **Data Persistence:** User data changes (additions, edits, deletions) are automatically saved to local storage for offline availability and data recovery.
*   **API Integration:** Fetches user data from a configurable REST API, allowing seamless integration with backend systems.
*   **Customizable:** Easily customizable components and styles to match your branding.

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


