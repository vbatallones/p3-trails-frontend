import React, { useEffect, useState } from 'react';
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const FaveTrails = (props) => {
	console.log(props);

	const [faveTrails, setFaveTrails] = useState([]);

    // axios call the user in the backend with all the trails saved in the user
	useEffect(() => {
		axios
			.get(`${REACT_APP_SERVER_URL}/api/users/${props.user.id}`)
			.then((response) => {
				console.log('Success call', response.data);
				setFaveTrails(response.data.userTrails);
			})
			.catch((err) => console.log(err));
    }, [props.user.id]);
    
  
    
    //map through the trails
	const trails = faveTrails.map((trail, idx) => {
          // handle delete function
	const handleDelete = (e) => {
		console.log(trail._id);
		let url = `${REACT_APP_SERVER_URL}/usertrails/${trail._id}`;
		axios
			.delete(url)
			.then((response) => {
				console.log(response);
			})
			.catch((err) => console.log(err));
    };
		console.log(trail);
		return [
			<p key={idx}> {trail.name}</p>,
			<button onClick={handleDelete}>Delete</button>,
		];
	});
	return (
		<div>
			<h1>My Awesome Trails</h1>
			<h2>{trails}</h2>
		</div>
	);
};

export default FaveTrails;
