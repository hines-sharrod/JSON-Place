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
                        Email: <a href={'mailto:' + email}> {email} </a>
                    </li>
                    <li>
                        Address: {address}
                    </li>
                    <li>
                        Phone: <a href={'tel:' + phone} > {phone} </a>
                    </li>
                    <li>
                        Website: <a href={'http://' + website} target="_blank" rel="noopener noreferrer">{website}</a>
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