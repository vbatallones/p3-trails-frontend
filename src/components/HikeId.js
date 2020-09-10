import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const HikeId = (props) => {
    console.log(props)
	let history = useHistory();

    const goBackHandle = () => {
        history.push('/hike/');
    }

	const handleSubmit = (event) => {
		event.preventDefault();
		
        const value1 = event.target[0].value;
        const value2 = event.target[1].value;
		// console.log('-----------------',event.target[1].value);
		axios
			.post(`${REACT_APP_SERVER_URL}/trails/create`, {
                name: value1,
                image: value2,
				user: props.user,
			})
			.then((response) => {})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<h1>{props.hike.name}</h1>
			<h3>{props.hike.location}</h3>
			<p>{props.hike.summary}</p>
            <img src={props.hike.imgSmallMed}/>
			<h3>{props.hike.stars}</h3>
			<form onSubmit={handleSubmit}>
				<input hidden type="text" name="name" value={props.hike.name} />
				<input hidden type="text" name="name" value={props.hike.imgSmallMed} />
				<button type="submit">
					Add to your favorites
				</button>
                <button onClick={goBackHandle}>Go Back to Trails</button>
			</form>
		</div>
	);
};

export default HikeId;
