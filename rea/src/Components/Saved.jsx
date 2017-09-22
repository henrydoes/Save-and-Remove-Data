import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class Saved extends Component {
  render() {
    return (
      <Container>
            {
              this.props.savedList.map((feature, featureKey) => {
                console.log(feature)
                return (
                  <div key={featureKey}>
                    <span>Price:</span><span>{feature.price}</span>
                    <img className="main-image" src={feature.mainImage} alt=""/>
                  </div>
                )
              })
            }
        </Container>
    )
  }
}

export default Saved