import React, { Component } from 'react';
import Hikes from './Hikes';
import axios from 'axios';
require('dotenv').config()
const fetch = require('node-fetch');



const API_KEY = process.env.REACT_APP_API_KEY;
const REACT_APP_HIKE_ID = process.env.REACT_APP_HIKE_ID;
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

const REACT_APP_LAT = process.env.REACT_APP_LAT;
const REACT_APP_LONG = process.env.REACT_APP_LONG;
const DISTANCE = process.env.REACT_APP_DISTANCE;


class AllHikes extends Component{

    state = {
      hikes: [],
      user: ('')
    }
    
    
      componentDidMount() {
        this.getUserData()
        console.log(this.state.user)
      }
  

      getUserData = async () => {
        console.log(this.props.user.id)
      try {
        const res = await axios.post(
            `${REACT_APP_SERVER_URL}/api/users/profile/get`, {_id: this.props.user.id}
        );
        this.setState({user: res.data});
      } catch (e) {
        console.log(e);
      }

      fetch(`https://www.hikingproject.com/data/get-trails?lat=${this.state.user.latitude}&lon=${this.state.user.longitude}&maxDistance=${this.state.user.radiusTrail}&key=${API_KEY}`)
      .then(res => res.json())
      .then(data => this.setState({hikes: data.trails}))
      .catch(err =>{
        console.log('Error while fetching trails', err)
      })
    }




    render(){
      console.log(this.state.user)
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