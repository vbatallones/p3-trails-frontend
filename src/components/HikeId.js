import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HikeId extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.hike.name}</h1>
                <h3>{this.props.hike.location}</h3>
                <p>{this.props.hike.summary}</p>
                <h3>{this.props.hike.stars}</h3>
                
                <form>
                    <input hidden name="name" value={this.props.hike._id}/>
                    <input hidden name="name" value={this.props.user}/>
                    <button type="submit"><h3>Add to your favorites</h3></button>
                </form>
            </div>
        )
    }
}

export default HikeId