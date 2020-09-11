import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const FaveTrails = (props) => {
	console.log(props);

	const [faveTrails, setFaveTrails] = useState([]);

    // axios call the user in the backend with all the trails saved in the user
	useEffect(() => {
		handleTrails();
    }, [faveTrails]);
	
	const handleTrails = () => {
		axios
			.get(`${REACT_APP_SERVER_URL}/api/users/${props.user.id}`)
			.then((response) => {
				console.log('Success call', response.data);
				setFaveTrails(response.data.userTrails);
			})
			.catch((err) => console.log(err));

	}


	const handleDelete = (e) => {
		console.log(`clicked`)
		const user = props.user.id
		const trail = e.target.value
		let url = `${REACT_APP_SERVER_URL}/trails/delete`;
		axios
			.post(url, {
				_id: user,
				userTrails: trail
			}) 
			.then((response) => {
				console.log(response.data);
				setFaveTrails(response.data.userTrails);
				handleTrails()
				
			})
			.catch((err) => console.log(err));

    };
    
    //map through the trails
	const trails = faveTrails.map((trail, idx) => {
 master
		console.log(trail);
		// handle delete function
		return [
			// <p key={idx}> {trail.name} </p>,
			<div className="faveList">
			<p key={idx}> <Link to= {{pathname: `/hike/${trail.id}`}}><span className="faveName"> {trail.name} </span></Link> </p>
			<button className="deleteBtn" value={trail.name} onClick={handleDelete}>Delete</button>
			</div>
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
