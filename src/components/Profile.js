import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import EditForm from './EditForm';

const Profile = (props) => {
   let [currentForm, setForm] = useState("Edit User");


    console.log(props);
    const userData = props.user ? 
    (<div>
        <h1>Profile</h1>
        <p><strong>Name:</strong> {props.user.name}</p>
        <p><strong>Email:</strong>  {props.user.email}</p>
        <p className="id" name="id"><strong>ID:</strong>  {props.user.id}</p>
        <p><strong>Longitude:</strong> {props.user.longitude}</p>
        <p><strong>Latitude:</strong>  {props.user.latitude}</p>
        <p><strong>Distance from Trails:</strong>  {props.user.radiusTrail}</p>

        <input type ="button" onClick={() => ({currentForm}="Edit User") ? (setForm(currentForm = "Cancel"), console.log({currentForm})) : (setForm(currentForm="Edit User"), console.log({currentForm}))} value={currentForm}/>
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
            <div>
            {props.user ? userData : errorDiv}
            </div>
            <EditForm user={props.user} />
            
        </div>
    )

    
}

export default Profile;