import React from 'react'
import injectSheet from 'react-jss'
import { Row, Col } from 'react-flexbox-grid'
import SanFrancisco from '../fonts/SFUIText-Regular.ttf'


const styles = {
  '@font-face': {
  fontFamily: 'SanFrancisco',
  src: `url('${SanFrancisco}') format("truetype")`,
  },
  container: {
    padding: '2% 2% 0',
  },
  root: {
    border: '2px solid rgba(220, 220, 220, 0.9)',
    background: 'white',
    padding: '2% 5% 3%',
    fontFamily: 'SanFrancisco',
    fontSize: '20px',
    lineHeight: '25px',
    maxWidth: '1170px',
    margin: '0 auto',
  },
  informationsLinks: {
    textDecoration: 'none',
    display: 'block',
    lineHeight: '50px',
    color: '#4682B4',
  },
  onWebsite: {
    opacity: '0.6',
  }
}
class AboutPage extends React.Component  {
  render () {
    const {classes} =  this.props
    return (
      <div>
        <div className={classes.container}>
          <div className={classes.root}>
            <Row middle='md'>
              <Col md={12}>
                <p className={classes.aboutInformation}>Each group in our "community of reason" rejects the supernatural and loves
                rational thought and science.We call ourselves atheist,agnostic,bright,Ethical Culture,
                freethought,Humanist,Pastafarian,rationalist,realist,skeptic,and other terms.</p>
                <p className={classes.aboutInformation} >We are happy,positive people who would prefer to engage with religious people and find common
                ground,while being poiletely critical on a few important issues such as religious privileges in the
                law,and faith-based reasoning in political desision-making.</p>
                <p className={classes.onWebsite}>On the UnitedCor Website:</p>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <a className={classes.informationsLinks} href="https://unitedcor.org/">Home Page</a>
                <a className={classes.informationsLinks} href="https://unitedcor.org/our-groups/">Our Groups</a>
                <a className={classes.informationsLinks} href="https://unitedcor.org/category/news/">News</a>
                <a className={classes.informationsLinks} href="https://unitedcor.org/contact/">Contact</a>
                <a className={classes.informationsLinks} href="https://facebook.com/CoalitionOfReason">Facebook</a>
              </Col>
              <Col md={4}>
                <a className={classes.informationsLinks} href="https://unitedcor.org/about-unitedcor/">About Us</a>
                <a className={classes.informationsLinks} href="https://unitedcor.org/cooperating-national-groups/">Our Affiliates</a>
                <a className={classes.informationsLinks} href="https://unitedcor.org/resources/">Resourses</a>
                <a className={classes.informationsLinks} href="https://unitedcor.org/unitedcor-newsletters/">Sign Up for News</a>
                <a className={classes.informationsLinks} href="https://twitter.com/unitedcor">Twitter</a>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}
export default injectSheet(styles)(AboutPage)
