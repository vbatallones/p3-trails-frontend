import React from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


const HikeId = (props) => {
	
    console.log(props.user)

	let history = useHistory();

    const goBackHandle = () => {
        history.push('/hike/');
    }

	const handleSubmit = (event) => {
        event.preventDefault();
        
		const value1 = event.target[0].value
		const value2 = event.target[1].value
		
		axios.post(`${REACT_APP_SERVER_URL}/trails/createtrail`, {
			name: value1,

			id: value2,

            user: props.user
			
        })
        .then((response) => {
			
            console.log(response)
        })
        .catch(err => console.log(err))
	}
		return (
			<div className="hikesList">
				
				<h1>{props.hike.name}</h1>
				<h3>{props.hike.location}</h3>
				<p>{props.hike.summary}</p>
				<h3>{props.hike.stars}</h3>
				<img src={props.hike.imgSmallMed} alt="trail picture"/>
                <form onSubmit={handleSubmit}>
				
					<input hidden name="name" value={props.hike.name} />
					
					<input hidden name="id" value={props.hike.id} />

					<button className="deleteBtn" type="submit" >
						Add to your favorites
					</button>
				</form>
				<button className="deleteBtn" onClick={goBackHandle}>Go Back to Trails</button>
			</div>
		);

}

export default HikeId;