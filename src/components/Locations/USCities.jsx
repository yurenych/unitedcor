import React from 'react'
import injectSheet from 'react-jss'

import cities from '../../data/cityListItems.json'
import arrow from '../../img/arrow@2x.png'
import SanFranciscoLight from '../../fonts/SFUIDisplay-Light.ttf'


const styles = {
  '@font-face': {
    fontFamily: 'SanFranciscoLight',
    src: `url('${SanFranciscoLight}') format("truetype")`
  },
  root: {
    maxWidth: '1170px',
    margin: '0 auto',
  },
  cityTitle: {
    margin: '5% 0',
    textAlign: 'center',
  },
  statesName: {
    margin: '3% 0',
  },
  cityName: {
    fontFamily: 'SanFranciscoLight',
    letterSpacing: '1px',
    background: 'white',
    border: '1px solid rgba(220, 220, 220, 0.9)',
    padding: '1.2% 0 1.2% 2%',
    opacity: '0.7',
    position: 'relative',
  },
  arrow: {
    position: 'absolute',
    top: '20%',
    right: '5%',
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


class USCities extends React.Component {
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
        </div>
          {
            Object.keys(cityListItems).map((cityListName, cityListIndex) =>
              <div key={cityListIndex}>
                <h1 className={classes.cityTitle}>{cityListName}</h1>
                <div>
                  {
                    Object.keys(cityListItems[cityListName]).map((areaName, areaIndex) => {
                      let hideList = true
                      cityListItems[cityListName][areaName].map((cityName, cityIndex) => {
                        if(cityName.city.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) > -1) {
                          hideList = false
                        }
                      })
                      if(!hideList){
                        return(
                          <div key={areaIndex}>
                            <h2 className={classes.statesName}>{areaName}</h2>
                            <div>
                              {
                                Object.keys(cityListItems[cityListName][areaName]).map((cityName, cityIndex) => {
                                  if(cityListItems[cityListName][areaName][cityName].city.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) > -1) {
                                    return(
                                      <div key={cityIndex}>
                                        <h3 className={classes.cityName}>
                                          {cityListItems[cityListName][areaName][cityName].city}
                                          <img src={arrow} className={classes.arrow}/>
                                        </h3>
                                      </div>
                                    )
                                  } else return null
                                })
                              }
                            </div>
                          </div>
                        )
                      } else return null
                    })
                  }
                </div>
              </div>
            )
          }
      </div>
      )
  }
}

export default injectSheet(styles)(USCities)
