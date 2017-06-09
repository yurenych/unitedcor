import React from 'react'
import injectSheet from 'react-jss'
import {Gmaps, Marker, InfoWindow} from 'react-gmaps'
import { Row, Col } from 'react-flexbox-grid'

import coordinate from '../data/cityListCordinates.json'

const style = {
  root: {
    position: 'relative',
  },
  locationButton: {
    border: '1px solid rgba(220, 220, 220, 0.9)',
    textDecoration: 'none',
    textAlign: 'center',
    color: 'black',
    background: 'white',
    borderRadius: '8px',
    padding: '4% 25%',
  },
  buttonContainer: {
    textAlign: 'center',
  },
  buttons: {
    maxWidth: '1170px',
    margin: '5% auto 2%',
  },
  map: {
    maxWidth: '1170px',
    height: '500px',
    margin: '0 auto',
  }
}


const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

const params = {v: '3.exp', key: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'};

class SetLocationPage extends React.Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  render() {
    const {classes } = this.props

    return (
      <div>
        <Gmaps
          className={classes.map}
          lat={coords.lat}
          lng={coords.lng}
          zoom={3}
          loadingMessage={'Loading map, please wait... If nothing happens, reload the page.'}
          params={params}
          onMapCreated={this.onMapCreated}
        >
        {
          cityListCordinates.map((cityName,cityIndex) =>
            <Marker lat={cityName.latitude} lng={cityName.longitude} />
          )
        }
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, React :)'} />
        </Gmaps>
        <Row className={classes.buttons}>
          <Col md={4} className={classes.buttonContainer}><a href="#" className={classes.locationButton} >Featured Events</a></Col>
          <Col md={4} className={classes.buttonContainer}><a href="#" className={classes.locationButton} >US Cities</a></Col>
          <Col md={4} className={classes.buttonContainer}><a href="#" className={classes.locationButton} >International Cities</a></Col>
        </Row>
      </div>
    )
  }
}


export default injectSheet(style)(SetLocationPage)

