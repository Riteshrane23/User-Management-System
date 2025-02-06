import axios from 'axios';

const API_URL = 'https://reqres.in/api/users';

export const getAllUsers = async () => {
    let page = 1;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let allUsers: any[] = [];
    let totalPages = 1;

    while (page <= totalPages) {
        const response = await axios.get(`${API_URL}?page=${page}`);
        allUsers = [...allUsers, ...response.data.data];

        totalPages = response.data.total_pages; 
        page++; 
    }

    return allUsers;
};export const getUserById = (id: number) => axios.get(`${API_URL}/${id}`);
export const addUser = (userData: object) => axios.post(API_URL, userData);
export const updateUser = (id: number, userData: object) => axios.put(`${API_URL}/${id}`, userData);
export const deleteUser = (id: number) => axios.delete(`${API_URL}/${id}`);