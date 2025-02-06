import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Paper, TextField, Typography } from '@mui/material';

export interface User {
    id?: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar?: string;
}

const UserForm = () => {
    const { id } = useParams<{ id?: string }>(); 
    const navigate = useNavigate();
    const isEditing = Boolean(id);

    const [user, setUser] = useState<User>({ first_name: '', last_name: '', email: '' });

    useEffect(() => {
        if (isEditing) {
            try {
                const storedUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
                const foundUser = storedUsers.find((u) => u.id === Number(id));
                if (foundUser) setUser(foundUser);
            } catch (error) {
                console.error('Error parsing localStorage:', error);
            }
        }
    }, [id, isEditing]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const storedUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');

            if (isEditing) {
                const updatedUsers = storedUsers.map((u) => (u.id === Number(id) ? { ...u, ...user } : u));
                localStorage.setItem('users', JSON.stringify(updatedUsers));
            } else {
                const newUser = { ...user, id: Date.now(), avatar: 'https://via.placeholder.com/50' };
                localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]));
            }

            navigate('/');
        } catch (error) {
            console.error('Error updating localStorage:', error);
        }
    };

    return (
        <Paper elevation={3} sx={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <Typography variant="h5" textAlign="center">{isEditing ? 'Edit User' : 'Add User'}</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="First Name"
                    name="first_name"
                    value={user.first_name}
                    onChange={handleChange}
                    fullWidth
                    sx={{ marginBottom: 2 }}
                    required
                />
                <TextField
                    label="Last Name"
                    name="last_name"
                    value={user.last_name}
                    onChange={handleChange}
                    fullWidth
                    sx={{ marginBottom: 2 }}
                    required
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={user.email}
                    onChange={handleChange}
                    fullWidth
                    sx={{ marginBottom: 2 }}
                    required
                />
                <Button variant="contained" type="submit" fullWidth>{isEditing ? 'Update' : 'Add'} User</Button>
            </form>
        </Paper>
    );
};

export default UserForm;
