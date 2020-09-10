import React from 'react';
import {Link} from 'react-router-dom';

const Hikes = (props) => {
    // console.log(props)
        return(
        <div>
            <h1>{props.hike.name}</h1>
            <h3>{props.hike.location}</h3>
            <p>{props.hike.summary}</p>
            <h3>{props.hike.stars}</h3>
            <img src={props.hike.imgSmallMed} alt="trail"/>
            <h3> <Link to= {{pathname: `/hike/${props.hike.id}`}}> View this hike </Link></h3>
        </div>
        )
    
}

export default Hikes