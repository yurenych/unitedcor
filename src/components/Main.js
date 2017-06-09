import React from 'react';
import injectSheet from 'react-jss'

import AboutPage from './AboutPage.jsx'
import InternationalCities from './Locations/InternationalCities.jsx'
import USCities from './Locations/USCities.jsx'
import Header from './Header.jsx'
import SetLocationPage from './SetLocationPage.jsx'
import SeeEvents from './SeeEventsPage.jsx'
import { Link } from 'react-router'

const styles = {
  root: {
    maxWidth: '1170px',
    margin: '0 auto',
  }
}
class Main extends React.Component {
  render() {
    const { classes } =  this.props
    return (
      <div>
        <Header />
        <SeeEvents />
      </div>
    );
  }
}

export default injectSheet(styles)(Main)
