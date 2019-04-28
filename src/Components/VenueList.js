import React, { Component } from 'react'; 
import axios from 'axios'; 

import { PARTYANIMALS_API_URL, PARTYANIMALS_API_KEY} from '../constant';

//https://partyanimals.hackeryou.com/api/v1/venue/
class VenueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            venues: []
        };
    }

    componentDidMount() {
        // Make our data request here
        this.getVenueData();
    }

    async getVenueData() {
        const venueData = await axios.get(PARTYANIMALS_API_URL, {
           headers: {
               'Authorization' : `Bearer ${PARTYANIMALS_API_KEY}`
             } 
        });
        
        // destructuring data from venuedata and then renaming it into venues using 
        const { data : venues } = venueData;

        this.setState({
            venues : venues // or you can use venues only too
        })     
    }
    renderLoader() {
        return <p> ... Loading </p>;
    }

    renderVenues() {
        const { venues } = this.state;
        const venueHTML = venues.map( item => {
            //renaming _id to id for usability and readability purpose.
            const { name, image, description, venuetype: type, _id:id } = item;
            
            return (
                <div 
                    key= { id } 
                    className= "venueCard" 
                    onClick= { () => { this.props.setSelectedVenue(id) }}
                >
                <img src= { image } alt=""/>
                <h3 className= "venueName" > Venue Name: { name } </h3>
                <h5> Venue Type: { type } </h5>
                <h5> Description: { description } </h5>
                </div>
            );
        })
        return venueHTML;
    }

    render() {
        return (
            <section className= "venueListComponent">
                <h2> Venue List </h2>
                <div className = "venueList">
                    { 
                        this.state.venues.length 
                        ? this.renderVenues()
                        : this.renderLoader()
                    }
                </div>
            </section>
        );
    }
}

export default VenueList