import React from 'react'

const UserDetails = ({userSelected}) => {
    return userSelected.id > 0 ? (
        <div>
            <h3>{userSelected.name} </h3>
            <p>{userSelected.username} </p>
            <p>{userSelected.email} </p>
            <p>{`${userSelected.address.street} ${userSelected.address.suite}`}</p>
            <p>{`${userSelected.address.city} ${userSelected.address.zipcode}`} </p>
            <p>{userSelected.phone} </p>
            <p>{userSelected.website} </p>
            <p>{`${userSelected.company.name} (${userSelected.company.catchPhrase})`} </p> 
        </div>
    ): null
}

export default UserDetails; 