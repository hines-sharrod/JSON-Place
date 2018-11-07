import React from 'react';

const UserDetails = ({
        name, 
        username, 
        email, 
        address, 
        phone, 
        website, 
        company
    }) => {

    return (
        <div className="user-details-card">
            <div>
                <h3>{name}</h3>
                <span>{username}</span>
            </div>
            <div>
                <ul>
                    <li>
                        Email: {email}
                    </li>
                    <li>
                        Address: {address}
                    </li>
                    <li>
                        Phone: {phone}
                    </li>
                    <li>
                        Website: {website}
                    </li>
                    <li>
                        Company: {company}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default UserDetails;