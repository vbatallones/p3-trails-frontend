import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

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


	const trails = faveTrails.map((t, idx) => {
		console.log(t)
		return <div key={idx}>{t.name}</div>
	})



    const userData = props.user ? 
    (<div>
        <h1>Profile</h1>
        <p><strong>Name:</strong> {props.user.name}</p>
        <p><strong>display name:</strong> {props.user.displayName}</p>
        <p><strong>Email:</strong>  {props.user.email}</p>
        <p><strong>ID:</strong>  {props.user.id}</p>
    </div>) : <h4>Loading...</h4>

    const errorDiv = () => {
        return(
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        )
    }

    return(
        <div>
            {props.user ? userData : errorDiv}
        </div>
    )

    
}

export default Profile;