import React from 'react'
import injectSheet from 'react-jss'

import internationalCitiesList from '../../data/cityListInternational.json'
import SanFranciscoLight from '../../fonts/SFUIDisplay-Light.ttf'
import arrow from '../../img/arrow@2x.png'
import searchIcon from '../../img/search_icon.png'
const style = {
  '@font-face': {
    fontFamily: 'SanFranciscoLight',
    src: `url('${SanFranciscoLight}') format("truetype")`
  },
  root: {
    maxWidth: '1170px',
    margin: '0 auto',
  },
  citiesTitle: {
    textAlign: 'center',
    fontSize: '36px',
    fontWeight: '800',
    margin: '3% auto 5%',
  },
  cityName: {
    fontFamily: 'SanFranciscoLight',
    letterSpacing: '1px',
    background: 'white',
    border: '1px solid rgba(220, 220, 220, 0.9)',
    padding: '1.2% 0 1.2% 2%',
    opacity: '0.7',
    position: 'relative',
    margin: '2% 0',
  },
  arrow: {
    position: 'absolute',
    top: '20%',
    right: '5%',
  },
  city: {
    fontSize: '18px',
    margin: '0',
  },
  inputStyle: {
    background: 'rgba(220, 220, 220, 0.8)',
    margin: '2% auto',
    border: '1px solid rgba(220, 220, 220, 0.9)',
    width: '100%',
    height: '30px',
    borderRadius: '3px',
  },
  inputContainer: {
    padding: '0 5%',
    background: 'white',
  }
}


class InternationalCities extends React.Component {
  state = {
    searchQuery: '',
  }

  handleSearch(event) {
    this.setState({
      searchQuery: event.target.value,
    })
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.inputContainer}>
          <input onChange={(event) => {this.handleSearch(event)}}
          type='text'
          className={classes.inputStyle} />
            <div>
              <img src={searchIcon} />
              <p>Search</p>
            </div>
        </div>
        <div className={classes.citiesTitle}>International Cities</div>
        {
          Object.keys(internationalCitiesList).map((stateName, stateKey) => {
            let hideList = true
            internationalCitiesList[stateName].map((cityName, cityKey) => {
              if(cityName.city.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) > -1) {
                hideList = false
              }
            })
            if(!hideList){
              return(
                <div key={stateKey}>
                  <h1>{stateName}</h1>
                  <div>
                  {
                    Object.keys(internationalCitiesList[stateName]).map((cityName, cityKey) => {
                      if(internationalCitiesList[stateName][cityName].city.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) > -1) {
                        return (
                          <div key={cityKey} className={classes.cityName}>
                            <h2 className={classes.city}>{internationalCitiesList[stateName][cityName].city}</h2>
                            <img src={arrow} className={classes.arrow}/>
                          </div>
                        )
                      } else return null
                    })
                  }
                  </div>
                </div>
              )
            } else return
          })
        }
      </div>
    )
  }
}


export default injectSheet(style)(InternationalCities)
