import React from 'react';
import './UserProfile.css';

const UserProfile = ({ user }) => {
    if (!user) return null;

    return (
        <div className="user-profile">
            <h3>Owner Profile</h3>
            <img src={user.avatar_url} alt={user.login} />
            <p><a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a></p>
            <p>{user.bio}</p>
        </div>
    );
};

export default UserProfile;
