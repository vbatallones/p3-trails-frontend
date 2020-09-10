import React, { Component } from 'react';
import Hikes from './Hikes';
require('dotenv').config()
const fetch = require('node-fetch');


const API_KEY = process.env.REACT_APP_API_KEY;
const REACT_APP_HIKE_ID = process.env.REACT_APP_HIKE_ID;

const REACT_APP_LAT = process.env.REACT_APP_LAT;
const REACT_APP_LONG = process.env.REACT_APP_LONG;
const DISTANCE = process.env.REACT_APP_DISTANCE;
let fetchAllHTML = `https://www.hikingproject.com/data/get-trails?lat=${REACT_APP_LAT}&lon=${REACT_APP_LONG}&maxDistance=${DISTANCE}&key=${API_KEY}`

class AllHikes extends Component{

    state = {
      hikes: []
    }
    
    
      componentDidMount() {
        this.getHikes()
      }
    
    
      getHikes = () => {
    
        fetch(fetchAllHTML)
        .then(res => res.json())
        .then(data => this.setState({hikes: data.trails}))
        .catch(err =>{
          console.log('Error while fetching trails', err)
        })
      }

    render(){
      console.log(this.props.user)
        let hikes = this.state.hikes.map((hike, i) =>{
            return <Hikes key={i} hike={hike} user={this.props.user}/>
        })
        return(
            
            <div>
              {hikes}
            </div>
        )
      
    }
}

export default AllHikes;