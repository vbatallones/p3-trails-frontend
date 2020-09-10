import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FaveTrails from './FaveTrails';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
require('dotenv').config();

const Profile = (props) => {

    const [faveTrails, setFaveTrails] = useState([]);

	useEffect(() => {
		axios
			.get(`${REACT_APP_SERVER_URL}/api/users/${props.user.id}`)
			.then((response) => {
				console.log('Success call', response.data.userTrails);
				setFaveTrails(response.data.userTrails);
			})
			.catch((err) => console.log(err));
    }, [props.user.id]);

   
    

	const userData = props.user ? (
		<div>
			<h1>Profile</h1>
			<p>
				<strong>Name:</strong> {props.user.name}
			</p>
			<p>
				<strong>display name:</strong> {props.user.displayName}
			</p>
			<p>
				<strong>Email:</strong> {props.user.email}
			</p>
			<p>
				<strong>ID:</strong> {props.user.id}
			</p>
		</div>
	) : (
		<h4>Loading...</h4>
	);

	const errorDiv = () => {
        const trails = faveTrails.map((trail, idx) => {
            console.log(trail)
            return <FaveTrails key={idx} trail={trail} />
        })
        return (
			<div className="text-center pt-4">
				<h3>
					Please <Link to="/login">login</Link> to view this page
				</h3>
			</div>
		);
	};

	return <div>{props.user ? userData : errorDiv}</div>;
};

export default Profile;
