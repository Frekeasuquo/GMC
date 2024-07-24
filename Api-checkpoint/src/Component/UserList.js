import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';


const UserList = () => {
    const[ userList, setUserList ] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then( result => setUserList(result.data) )
    }, [])

    return (
        <div className='container mt-5 col-sm-9' >
        <h1>COMPANIES' DATABASE</h1>
            { userList.map(user => 
                <Card key = {user.id} className='mt-5'>
                    <Card.Header><h2>Company Name:</h2> <b>{user.company.name}</b></Card.Header>
                    <Card.Body>
                        <Card.Title> <h3>Username: </h3>{user.username}</Card.Title>
                        <Card.Text> <h3>Website: </h3>{user.website}</Card.Text>
                        <Card.Text> <h3>Email: </h3>{user.email}</Card.Text>
                        <Card.Text> <h3>Phone Number: </h3> {user.phone} </Card.Text>
                        <Card.Text> <h3>Zipcode: </h3>{user.address.zipcode}</Card.Text>
                        <Card.Text> <h3>Street: </h3>{user.address.street}</Card.Text>
                        <Card.Text> <h3>What we do: </h3>{user.company.catchPhrase}</Card.Text>
                    </Card.Body>
                </Card> )}
        </div>
    )
}

export default UserList;