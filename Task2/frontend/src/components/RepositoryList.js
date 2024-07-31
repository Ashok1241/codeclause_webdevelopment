import React from 'react';
import './RepositoryList.css';

const RepositoryList = ({ repositories, onRepoClick }) => {
    return (
        <div className="repository-list">
            {repositories.length === 0 ? (
                <p>No repositories found.</p>
            ) : (
                <ul>
                    {repositories.map((repo) => (
                        <li key={repo.id} onClick={() => onRepoClick(repo.owner.login, repo.name)}>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                {repo.full_name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RepositoryList;
