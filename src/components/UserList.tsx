import { useEffect, useState } from 'react';
import { getAllUsers } from '../services/apiService';
import { useNavigate } from 'react-router-dom';
import {
    Avatar, TextField, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, TableSortLabel, IconButton, Typography, Button,
    Box,
    TablePagination
} from '@mui/material';
import { Edit, Delete, PersonAdd } from '@mui/icons-material';
import ConfirmationDialog from '../components/ConfirmationDialog';

interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
}

const UserList =  () => {
    const [users, setUsers] = useState<User[]>([]);
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState<'first_name' | 'email'>('first_name');
    const [order, setOrder] = useState<'asc' | 'desc'>('asc');
    const [deleteUserId, setDeleteUserId] = useState<number | null>(null);
    const [page, setPage] = useState(0); // Zero-based page index for TablePagination
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        } else {
            getAllUsers().then(usersData => {
                setUsers(usersData);
                localStorage.setItem('users', JSON.stringify(usersData)); // Store API data locally
            }).catch(error => console.error("Error fetching users:", error));
        }
    }, []);

    // Search filter logic
    const filteredUsers = users.filter(user =>
        user.first_name.toLowerCase().includes(search.toLowerCase()) ||
        user.last_name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    // Sorting logic
    const sortedUsers = [...filteredUsers].sort((a, b) => {
        const valueA = a[sortBy].toLowerCase();
        const valueB = b[sortBy].toLowerCase();
        return order === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });

    // Pagination logic
    const paginatedUsers = sortedUsers.slice(page * rowsPerPage, (page + 1) * rowsPerPage); // Adjusted slicing

    const handleSort = (field: 'first_name' | 'email') => {
        const isSameField = sortBy === field;
        setSortBy(field);
        setOrder(isSameField && order === 'asc' ? 'desc' : 'asc');
    };

    const handleDelete = () => {
        if (deleteUserId !== null) {
            const updatedUsers = users.filter(user => user.id !== deleteUserId);
            setUsers(updatedUsers);
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            setDeleteUserId(null);
        }
    };

    return (
        <Paper elevation={3} sx={{ padding: 3, maxWidth: '1000px', margin: 'auto', borderRadius: '16px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="h4" textAlign="center" fontWeight={700} gutterBottom color="#333">
                User Management System
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                <TextField
                    label="Search Users"
                    variant="outlined"
                    sx={{ flex: 1, marginRight: 2 ,borderRadius: '8px'}}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<PersonAdd />}
                    sx={{ backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#1565c0' }}}
                    onClick={() => navigate('/users/add')}
                >
                    Add User
                </Button>
            </Box>

            <TableContainer component={Paper} sx={{ borderRadius: '12px', backgroundColor: '#fff' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Avatar</TableCell>
                            <TableCell>
                                <TableSortLabel 
                                    active={sortBy === 'first_name'}
                                    direction={order}
                                    onClick={() => handleSort('first_name')}
                                >
                                    Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel 
                                    active={sortBy === 'email'}
                                    direction={order}
                                    onClick={() => handleSort('email')}
                                >
                                    Email
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedUsers.length > 0 ? (
                            paginatedUsers.map(user => (
                                <TableRow key={user.id}             sx={{ '&:hover': { backgroundColor: '#f5f5f5', cursor: 'pointer' } }} // Hover effect
>
                                    <TableCell><Avatar src={user.avatar} /></TableCell>
                                    <TableCell>{user.first_name} {user.last_name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => navigate(`/users/edit/${user.id}`)}>
                                            <Edit color="primary" />
                                        </IconButton>
                                        <IconButton onClick={() => setDeleteUserId(user.id)}>
                                            <Delete color="error" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} align="center">
                                    <Typography variant="h6">No users found</Typography>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                component="div"
                count={sortedUsers.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={(_, newPage) => setPage(newPage)}
                onRowsPerPageChange={(event) => {
                    setRowsPerPage(parseInt(event.target.value, 10));
                    setPage(0); // Reset to first page when rows per page is changed
                }}
            />

            <ConfirmationDialog 
                open={deleteUserId !== null}
                onClose={() => setDeleteUserId(null)}
                onConfirm={handleDelete}
            />
        </Paper>
    );
};

export default UserList;
