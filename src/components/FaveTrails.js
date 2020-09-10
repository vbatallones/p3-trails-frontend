import React from 'react';
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const FaveTrails = (props) => {
	
    console.log(props)
	
//    const handleDelete = (e) => {
//         console.log(faveTrails)
//         let url = `${REACT_APP_SERVER_URL}/trails/`
//         axios.delete(url)
//         .then((response) => {
//             console.log('delete works', response)
//         }).catch((err) => console.log(err));
//     }
    

	return (
		<div>
        <h1>My Awesome Trails</h1>
			<h2>
                {/* {props.trail.name} */}
			</h2>
            
		</div>
	);
};


export default FaveTrails