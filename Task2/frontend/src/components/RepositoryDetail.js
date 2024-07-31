import React from 'react';
import './RepositoryDetail.css';

const RepositoryDetail = ({ repository }) => {
    if (!repository) return null;

    return (
        <div className="repo-details">
            <h2>{repository.full_name}</h2>
            <p>{repository.description}</p>
            <p>Stars: {repository.stargazers_count}</p>
            <p>Forks: {repository.forks_count}</p>
            <p>Open Issues: {repository.open_issues_count}</p>
            <a href={repository.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
    );
};

export default RepositoryDetail;
