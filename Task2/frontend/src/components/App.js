import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import RepositoryList from './RepositoryList';
import RepositoryDetail from './RepositoryDetail';
import UserProfile from './UserProfile';
import './App.css';
import githubLogo from './git_logo.jpeg';

const App = () => {
    const [query, setQuery] = useState('');
    const [repositories, setRepositories] = useState([]);
    const [error, setError] = useState('');
    const [selectedRepo, setSelectedRepo] = useState(null);
    const [userProfile, setUserProfile] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:5000/api/search/repositories?q=${query}`);
            setRepositories(response.data.items);
            setError('');
            setSelectedRepo(null);
            setUserProfile(null);
        } catch (error) {
            console.error('Error fetching repositories:', error);
            setError('Failed to fetch repositories.');
        }
    };

    const handleRepoClick = async (owner, repo) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/repositories/${owner}/${repo}`);
            setSelectedRepo(response.data);
            const userResponse = await axios.get(`http://localhost:5000/api/users/${response.data.owner.login}`);
            setUserProfile(userResponse.data);
        } catch (error) {
            console.error('Error fetching repository details:', error);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={githubLogo} alt="GitHub Logo" className="App-logo" />
            </header>
            <h1 align="center">GITHUB EXPLORER</h1>
            <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
            {error && <p className="error">{error}</p>}
            <RepositoryList repositories={repositories} onRepoClick={handleRepoClick} />
            <RepositoryDetail repository={selectedRepo} />
            <UserProfile user={userProfile} />
        </div>
    );
};

export default App;
