import React from 'react'
import injectSheet from 'react-jss'
import { Row, Col } from 'react-flexbox-grid'

import SanFrancisco from '../fonts/SFUIText-Regular.ttf'

const styles = {
  '@font-face': {
    fontFamily: 'SanFrancisco',
    src: `url('${SanFrancisco}') format("truetype")`
  },
  root: {
    background: '#4682B4'
  },
  headerContainer: {
    maxWidth: '1170px',
    padding: '2% 0',
    margin: '0 auto'
  },
  headerTaskContainer: {
    fontFamily: 'SanFrancisco',
    fontSize: '20px',
    textAlign: 'center'
  },
  headerTask: {
    textDecoration: 'none',
    color: '#FFFAFA'
  }
}
class Header extends React.Component {
  render() {
    const { classes } = this.props
    return(
      <div className={classes.root}>
        <Row className={classes.headerContainer}>
          <Col md={3} className={classes.headerTaskContainer}>
            <a href='#' className={classes.headerTask}>About</a>
          </Col>
          <Col md={3} className={classes.headerTaskContainer}>
            <a href='#' className={classes.headerTask}>Set Location</a>
          </Col>
          <Col md={3} className={classes.headerTaskContainer}>
            <a href='#' className={classes.headerTask}>See Events</a>
          </Col>
          <Col md={3} className={classes.headerTaskContainer}>
            <a href='https://unitedcor.org/app/' className={classes.headerTask}>Help</a>
          </Col>
        </Row>
      </div>
      )
  }
}

export default injectSheet(styles)(Header)
