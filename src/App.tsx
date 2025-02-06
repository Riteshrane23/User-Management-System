import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserDetail from './pages/UserDetail';
import UserForm from './components/UserForm';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users/:id" element={<UserDetail />} />
                <Route path="/users/edit/:id" element={<UserForm />} />
                <Route path="/users/add" element={<UserForm />} />
            </Routes>
        </Router>
    );
};

export default App;
