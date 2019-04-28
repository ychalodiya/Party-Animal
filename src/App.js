import React, { Component } from 'react';
import './styles/styles.scss';

// import our custom stuff here
import Header from './Components/Header';
import VenueList from './Components/VenueList';
import Footer from './Components/Footer';
import GuestList from './Components/GuestList';


class App extends Component {

  constructor() {
    super();
    this.state = {
      SelectedVenueId : null
    };
  // this.setSelectedVenue = this.setSelectedVenue.bind(this);
  }

  setSelectedVenue = (venueId) => {
      this.setState({
        SelectedVenueId: venueId
      });
      // console.log(venueId);
  }

  render() {
    return (
      <div>
        <main>
          <Header 
            title = "Party Animals"
            message = "It's party time !!!"
          />
          <main className= "wrapper">
            <VenueList setSelectedVenue = { this.setSelectedVenue } />
            <GuestList SelectedVenueId = { this.state.SelectedVenueId } />
          </main>
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
