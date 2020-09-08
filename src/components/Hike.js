import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HikeId from './HikeId'

require('dotenv').config()
var fetch = require('node-fetch');
const API_KEY = process.env.REACT_APP_API_KEY;

class Hike extends Component{
    state = {
        hikes:[]
    }

    componentDidMount(){
        this.getHikeId()
    }

    getHikeId = () => {
        const {match: {params}} = this.props;

        fetch(`https://www.hikingproject.com/data/get-trails-by-id?ids=${params.id}&key=${API_KEY}`)
        .then(res => res.json())
        .then(data => this.setState({hikes: data.trails}))
        .catch(err =>{
          console.log('Error while fetching trails', err)
        })
      }

    render(){
        let hikes = this.state.hikes.map((hike,i) =>{
            return <HikeId key={i} hike={hike} />
        })


        return(
            <div>
                {hikes}
            </div>
        )
    }
}

export default Hike;