import React from 'react';
import axios from 'axios';
//first named way
//import { PARTYANIMALS_API_URL, PARTYANIMALS_API_KEY} from '../constant';

//another way
//import constantss from '../constant';

// Third way by .env
const PARTYANIMALS_API_KEY = process.env.REACT_APP_PARTYANIMALS_API_KEY;

class GuestList extends React.Component{

    // Fetch data for who is attending the party 
    // Store that data in state
    // Render out an item for each guest: name, img , dance
    // if no guest, render out a placeholder message

    constructor(props) {
        super(props);
        this.state = {
            guests: []
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        const { SelectedVenueId } = this.props;

        if(SelectedVenueId && SelectedVenueId !== prevProps.SelectedVenueId) {
            this.getGuestData();
        }
        console.log('called');
    }

    async getGuestData() {
        try {
            const guestData = await axios.get(`https://partyanimals.hackeryou.com/api/v1/venue/animals/${this.props.SelectedVenueId}`,{
                headers: {
                    'Authorization' : `Bearer ${PARTYANIMALS_API_KEY}`
                } 
            });
        
            const { data: guests } = guestData;
            this.setState({
                guests
            })
            //console.log(guestData);
            //console.log(guests);
        } catch(err) {
            console.log(err.message); 
        }
    }

    renderGuests() {
        const guestHtml = this.state.guests.map(guest => {
            const { name, image, dance, _id: id} = guest;
            return (
                <div key= {id} className= "animalDetails">
                    <img src= { image } alt= ""/>
                    <p>Name: { name }</p>
                    <p> Fave Dance: { dance } </p>
                </div>
            )
        });

        return (
            <div className= "animalList"> { guestHtml } </div>
        );

    }
    render() {
        return(
            <section className="venueDetailComponent">
                <h2> Guest List</h2>
                {
                    this.state.guests.length
                    ?   this.renderGuests()  
                    : (
                        <p> Please select a Venue </p>
                    )
                }
            </section>
        );
    }
}

export default GuestList;