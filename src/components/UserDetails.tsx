import  { useEffect, useState } from 'react';
import { getUserById } from '../services/apiService';
import { useParams, Link } from 'react-router-dom';
import { Avatar, Button, Paper, Typography, Box } from '@mui/material';

interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
}

const UserDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        getUserById(Number(id)).then(res => setUser(res.data.data));
    }, [id]);

    if (!user) return <Typography textAlign="center" variant="h4" sx={{ marginTop: '20px' }}>Loading...</Typography>;

    return (
        <Paper
            elevation={6}
            sx={{
                padding: '40px',
                textAlign: 'center',
                maxWidth: '500px',
                margin: '50px auto',
                borderRadius: '16px',
                backgroundColor: '#f9f9f9',
            }}
        >
            <Avatar
                src={user.avatar}
                sx={{
                    width: 120,
                    height: 120,
                    margin: 'auto',
                    border: '4px solid #1976d2',
                }}
            />
            <Typography variant="h4" fontWeight="bold" sx={{ marginTop: '20px' }}>
                {user.first_name} {user.last_name}
            </Typography>
            <Typography variant="h6" color="text.secondary">{user.email}</Typography>

            <Box sx={{ marginTop: '20px' }}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                        padding: '12px 24px',
                        fontSize: '1rem',
                        borderRadius: '8px',
                    }}
                    component={Link}
                    to={`/users/edit/${user.id}`}
                >
                    Edit User
                </Button>
            </Box>
        </Paper>
    );
};

export default UserDetail;
