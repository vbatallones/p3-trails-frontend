import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


const HikeId = (props) => {
	
    console.log(props.user)

	const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log(event.target[0].value);
        console.log(REACT_APP_SERVER_URL)
        const value = event.target[0].value
		axios.post(`${REACT_APP_SERVER_URL}/trails/createtrail`, {
            name: value,
            user: props.user
			
        })
        .then((response) => {
            console.log(response)
        })
        .catch(err => console.log(err))
	}
		return (
			<div>
				
				<h1>{props.hike.name}</h1>
				<h3>{props.hike.location}</h3>
				<p>{props.hike.summary}</p>
				<h3>{props.hike.stars}</h3>
                <form onSubmit={handleSubmit}>
					<input hidden type="text" name="name" value={props.hike.name} />
					<button type="submit" >
						<h3> Add to your favorites</h3>
					</button>
				</form>
			</div>
		);

}

export default HikeId;
