# User Management System

## Description

The **User Management System** is a web application built using **React** and **Material UI**. It allows administrators to manage users, including viewing, searching, sorting, and deleting users. The app fetches user data either from an API or from local storage if the user is offline. The system also includes features for pagination, sorting, and confirming delete actions.

## Features

- Search users by first name, last name, or email.
- Sort users by name or email.
- Paginated view of users.
- Add, edit, and delete users.
- Confirmation dialog before deleting a user.

## Prerequisites

- Node.js (v14 or above)
- npm (v6 or above)

## Setup and Installation

### 1. Clone the Repository

git clone https://github.com/your-username/user-management-system.git

```

### 2. Navigate to the Project Directory
```bash

cd user-management-system
```
. Install Dependencies

npm install

npm run dev

http://localhost:3000

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
#   U s e r - M a n a g e m e n t - S y s t e m  
 